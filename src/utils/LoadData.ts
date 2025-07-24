import { QuestionStats, SkillProgress } from "../types/ChartTypes";

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

export const loadSkillsProgress = async (): Promise<SkillProgress[] | null> => {
  const skillProgressList: SkillProgress[] = [];
  try {
    const response = await fetch("/json/userSkillProgress.json");
    if (!response.ok) {
      throw new Error("Failed to fetch JSON");
    }

    const jsonData = await response.json();

    for (const data of jsonData) {
      const numProblemSolved: number = data.numAcceptedQuestions.reduce(
        (sum: number, item: { count: number; difficulty: string }) =>
          sum + item.count,
        0,
      );

      const numProblemWrong: number = data.numFailedQuestions.reduce(
        (sum: number, item: { count: number; difficulty: string }) =>
          sum + item.count,
        0,
      );

      const numProblemUntouched: number = data.numUntouchedQuestions.reduce(
        (sum: number, item: { count: number; difficulty: string }) =>
          sum + item.count,
        0,
      );

      const totalProblems =
        numProblemSolved + numProblemWrong + numProblemUntouched;

      const formatID: (name: string) => string = (name: string): string => {
        return name
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      };

      const id: string = formatID(data.id);

      const skillProgress: SkillProgress = {
        skill: {
          id: id,
        },
        stats: {
          numAcceptedQuestions: data.numAcceptedQuestions,
          numFailedQuestions: data.numFailedQuestions,
          numUntouchedQuestions: data.numUntouchedQuestions,
          totalQuestionBeatsPercentage: 0,
        },
        numProblemSolved: numProblemSolved,
        totalProblems: totalProblems,
      };

      skillProgressList.push(skillProgress);
    }
  } catch (error) {
    console.error("Error loading user progress:", error);
    return null;
  }

  return skillProgressList;
};
