"use client";

import { questions } from "@/data/questions";
import type { Answer } from "@/types";
import ProgressBar from "./ProgressBar";
import OptionButton from "./OptionButton";

type Props = {
  currentIndex: number;
  answers: Answer[];
  onAnswer: (answer: Answer) => void;
  onBack: () => void;
};

export default function QuestionScreen({
  currentIndex,
  answers,
  onAnswer,
  onBack,
}: Props) {
  const question = questions[currentIndex];
  const existingAnswer = answers.find((a) => a.questionId === question.id);

  return (
    <div
      className="min-h-screen flex flex-col px-5 py-6"
      style={{ background: "var(--bg)" }}
    >
      {/* header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          disabled={currentIndex === 0}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
          style={{ background: "#ede9ff", color: "#7c3aed" }}
        >
          ←
        </button>
        <div className="flex-1">
          <ProgressBar current={currentIndex + 1} total={questions.length} />
        </div>
      </div>

      {/* question card */}
      <div
        className="rounded-3xl p-6 mb-6 shadow-sm"
        style={{ background: "#fff" }}
      >
        <p
          className="text-xs font-black tracking-widest mb-3"
          style={{ color: "#a78bfa" }}
        >
          Q{question.id}
        </p>
        <h2
          className="text-lg font-bold leading-relaxed"
          style={{ color: "#2d1b69" }}
        >
          {question.text}
        </h2>
      </div>

      {/* options */}
      <div className="space-y-3 flex-1">
        {question.options.map((option) => (
          <OptionButton
            key={option.label}
            option={option}
            selected={existingAnswer?.optionLabel === option.label}
            onClick={() =>
              onAnswer({
                questionId: question.id,
                optionLabel: option.label,
                score: option.score,
              })
            }
          />
        ))}
      </div>

      <p className="text-center text-xs mt-6" style={{ color: "#c4b5fd" }}>
        選択肢をタップすると自動で次へ進みます
      </p>
    </div>
  );
}
