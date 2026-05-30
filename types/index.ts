export type OptionLabel = "A" | "B" | "C" | "D";

export type Option = {
  label: OptionLabel;
  text: string;
  score: number;
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
};

export type Answer = {
  questionId: number;
  optionLabel: OptionLabel;
  score: number;
};

export type ResultData = {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  catchcopy: string;
  description: string;
  shortDescription: string;
  features: string[];
  scoreRange: [number, number];
  accentColor: string;
  bgGradient: string;
};

export type Step = "start" | "question" | "result";
