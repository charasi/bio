import { QuestionStats } from "../types/ChartTypes";

export const loadUserProgress = async (): Promise<QuestionStats | null> => {
  try {
    const response = await fetch("/json/userQuestionProgress.json");
    if (!response.ok) {
      throw new Error("Failed to fetch JSON");
    }

    const jsonData = await response.json();

    return {
      numAcceptedQuestions: jsonData.numAcceptedQuestions,
      numFailedQuestions: jsonData.numFailedQuestions,
      numUntouchedQuestions: jsonData.numUntouchedQuestions,
      totalQuestionBeatsPercentage: jsonData.totalQuestionBeatsPercentage,
    };
  } catch (error) {
    console.error("Error loading user progress:", error);
    return null;
  }
};
