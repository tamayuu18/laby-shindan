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
      className="w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200 text-sm leading-snug font-medium"
      style={{
        borderColor: selected ? "#7c3aed" : "#e5d9f9",
        background: selected ? "#f0e8ff" : "#ffffff",
        color: selected ? "#2d1b69" : "#4a3880",
        boxShadow: selected
          ? "0 2px 12px rgba(124,58,237,0.15)"
          : "0 1px 4px rgba(100,80,180,0.07)",
      }}
    >
      <span
        className="inline-block w-7 h-7 rounded-lg text-xs font-black mr-3 text-center leading-7 flex-shrink-0"
        style={{
          background: selected ? "#7c3aed" : "#ede9ff",
          color: selected ? "#fff" : "#7c3aed",
          display: "inline-block",
        }}
      >
        {option.label}
      </span>
      {option.text}
    </button>
  );
}
