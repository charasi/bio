export type DifficultyLevel = "EASY" | "MEDIUM" | "HARD";

export interface DifficultyCount {
  count: number;
  difficulty: DifficultyLevel;
}

export interface Skill {
  id: string;
}

export interface QuestionStats {
  numAcceptedQuestions: DifficultyCount[];
  numFailedQuestions: DifficultyCount[];
  numUntouchedQuestions: DifficultyCount[];
  totalQuestionBeatsPercentage: number;
}

export interface SkillProgress {
  skill: Skill;
  stats: QuestionStats;
  numProblemSolved: number;
  totalProblems: number;
}
