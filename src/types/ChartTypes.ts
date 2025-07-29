import * as d3 from "d3";

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

export interface SkillProgress extends d3.SimulationNodeDatum {
  skill: Skill;
  stats: QuestionStats;
  numProblemSolved: number;
  totalProblems: number;
}
