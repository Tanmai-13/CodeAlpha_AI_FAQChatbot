import { Bot, Trash2, Sparkles } from 'lucide-react';

interface ChatHeaderProps {
  onClear: () => void;
  hasMessages: boolean;
}

export default function ChatHeader({ onClear, hasMessages }: ChatHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
            <Bot size={22} />
          </div>
          <div>
            <h1 className="flex items-center gap-1.5 text-lg font-semibold text-slate-900">
              AI FAQ Chatbot
              <Sparkles size={16} className="text-blue-500" />
            </h1>
            <p className="text-xs text-slate-500">
              Ask questions and get answers from the FAQ knowledge base.
            </p>
          </div>
        </div>

        <button
          onClick={onClear}
          disabled={!hasMessages}
          className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Clear chat history"
        >
          <Trash2 size={14} />
          Clear Chat
        </button>
      </div>
    </header>
  );
}
