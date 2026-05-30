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
    <div className="flex flex-col min-h-screen px-5 py-8">
      <div className="mb-6">
        <ProgressBar current={currentIndex + 1} total={questions.length} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-8">
          <p className="text-violet-300 text-xs font-medium tracking-widest mb-3">
            Q{question.id}
          </p>
          <h2 className="text-white text-xl font-bold leading-relaxed">
            {question.text}
          </h2>
        </div>

        <div className="space-y-3">
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
      </div>

      <div className="mt-8">
        <button
          onClick={onBack}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 text-white/40 text-sm disabled:opacity-20 hover:text-white/60 transition-colors"
        >
          ← 前の質問に戻る
        </button>
      </div>
    </div>
  );
}
