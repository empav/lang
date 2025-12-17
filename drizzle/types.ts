import {
  challengeOptions,
  challenges,
  challengesEnum,
  courses,
  lessons,
  units,
  userProgress,
} from "./schema";

export type Course = typeof courses.$inferSelect;
export type UserProgress = typeof userProgress.$inferSelect;
export type Lesson = typeof lessons.$inferSelect;
export type Unit = typeof units.$inferSelect;
export type Challenge = typeof challenges.$inferSelect;
export type ChallengeType = (typeof challengesEnum.enumValues)[number];
export type ChallengeOption = typeof challengeOptions.$inferSelect;

export type SeedChallengeOption = {
  text: string;
  correct: boolean;
  imageSrc?: string;
  audioSrc?: string;
};

export type SeedChallenge = {
  type: ChallengeType;
  order: number;
  question: string;
  options: SeedChallengeOption[];
};

export type SeedLesson = {
  title: string;
  order: number;
  challenges: SeedChallenge[];
};

export type SeedUnit = {
  title: string;
  description: string;
  order: number;
  lessons: SeedLesson[];
};

export type SeedLanguage = {
  title: string;
  imageSrc: string;
  units: SeedUnit[];
};
