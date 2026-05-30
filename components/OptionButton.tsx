"use client";

import type { Option } from "@/types";

type Props = {
  option: Option;
  selected: boolean;
  onClick: () => void;
};

export default function OptionButton({ option, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 text-base leading-snug
        ${
          selected
            ? "border-violet-400 bg-violet-500/20 text-white"
            : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/30 active:scale-[0.98]"
        }`}
    >
      <span className="font-bold text-violet-300 mr-3">{option.label}.</span>
      {option.text}
    </button>
  );
}
