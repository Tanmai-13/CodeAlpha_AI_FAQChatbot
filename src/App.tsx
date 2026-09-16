import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, Lightbulb } from 'lucide-react';
import ChatHeader from '@/components/ChatHeader';
import ChatInput from '@/components/ChatInput';
import MessageBubble from '@/components/MessageBubble';
import TypingIndicator from '@/components/TypingIndicator';
import type { ChatMessage } from '@/types/chat';
import { faqDataset, UNKNOWN_ANSWER } from '@/data/faqData';
import { findBestMatch, MATCH_THRESHOLD } from '@/utils/matchEngine';

const WELCOME_TEXT =
  "Hi! I'm your AI FAQ Chatbot. Ask me anything about Python, React, Git, HTML/CSS, JavaScript, AI/ML, internships, projects, resumes, or programming basics.";

const SUGGESTED_QUESTIONS = [
  'What is Python?',
  'What are React hooks?',
  'How do I push code to GitHub?',
  'What is machine learning?',
  'How do I find a tech internship?',
];

let idCounter = 0;
const makeId = () => `msg-${++idCounter}`;

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: makeId(), sender: 'bot', text: WELCOME_TEXT, timestamp: Date.now() },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message whenever the list or typing state changes.
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const pushBotMessage = useCallback((text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: makeId(), sender: 'bot', text, timestamp: Date.now() },
    ]);
  }, []);

  const handleSend = useCallback(
    (text: string) => {
      const userMsg: ChatMessage = {
        id: makeId(),
        sender: 'user',
        text,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      // Simulate brief processing delay so the typing indicator is visible.
      window.setTimeout(() => {
        const { bestIndex, bestScore } = findBestMatch(
          text,
          faqDataset.map((f) => f.question),
          faqDataset.map((f) => f.keywords)
        );

        const answer =
          bestIndex >= 0 && bestScore >= MATCH_THRESHOLD
            ? faqDataset[bestIndex].answer
            : UNKNOWN_ANSWER;

        pushBotMessage(answer);
        setIsTyping(false);
      }, 650);
    },
    [pushBotMessage]
  );

  const handleClear = useCallback(() => {
    setMessages([
      { id: makeId(), sender: 'bot', text: WELCOME_TEXT, timestamp: Date.now() },
    ]);
    setIsTyping(false);
  }, []);

  return (
    <div className="flex h-screen flex-col bg-slate-50 text-slate-900">
      <ChatHeader onClear={handleClear} hasMessages={messages.length > 1} />

      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}

          {isTyping && <TypingIndicator />}

          {/* Suggested questions — shown only before the first user message */}
          {messages.length <= 1 && !isTyping && (
            <div className="mt-2 animate-fadeIn">
              <div className="mb-2.5 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <Lightbulb size={14} className="text-amber-500" />
                Suggested questions
              </div>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 active:scale-95"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>
      </div>

      {/* Empty-state hint when the list scrolls */}
      <div className="hidden items-center justify-center gap-1.5 py-1 text-[11px] text-slate-400">
        <MessageCircle size={12} />
        Powered by local FAQ knowledge base
      </div>

      <ChatInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
}
