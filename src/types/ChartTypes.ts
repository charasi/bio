export type DifficultyLevel = "EASY" | "MEDIUM" | "HARD";

export interface DifficultyCount {
  count: number;
  difficulty: DifficultyLevel;
}

export interface QuestionStats {
  numAcceptedQuestions: DifficultyCount[];
  numFailedQuestions: DifficultyCount[];
  numUntouchedQuestions: DifficultyCount[];
  totalQuestionBeatsPercentage: number;
}
