"use client";

import { useState } from "react";
import type { Answer, Step } from "@/types";
import { questions } from "@/data/questions";
import { getResultByScore } from "@/data/results";
import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";

export default function DiagnosisApp() {
  const [step, setStep] = useState<Step>("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
  const result = getResultByScore(totalScore);

  const handleStart = () => {
    setStep("question");
    setCurrentIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (answer: Answer) => {
    const updated = answers.filter((a) => a.questionId !== answer.questionId);
    const newAnswers = [...updated, answer];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setStep("result");
    }
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      setStep("start");
    } else {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleReset = () => {
    setStep("start");
    setCurrentIndex(0);
    setAnswers([]);
  };

  return (
    <div className="max-w-md mx-auto min-h-screen">
      {step === "start" && <StartScreen onStart={handleStart} />}
      {step === "question" && (
        <QuestionScreen
          currentIndex={currentIndex}
          answers={answers}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}
      {step === "result" && (
        <ResultScreen result={result} onReset={handleReset} />
      )}
    </div>
  );
}
