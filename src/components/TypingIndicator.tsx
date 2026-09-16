import { Bot } from 'lucide-react';

export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5 animate-slideIn">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200 shadow-sm">
        <Bot size={18} />
      </div>
      <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3.5 ring-1 ring-slate-200 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-bounceDot rounded-full bg-slate-400" />
          <span className="h-2 w-2 animate-bounceDot rounded-full bg-slate-400 [animation-delay:0.15s]" />
          <span className="h-2 w-2 animate-bounceDot rounded-full bg-slate-400 [animation-delay:0.3s]" />
        </div>
      </div>
    </div>
  );
}
