type CategoryTagByBaekjunProblem = {
  aliases: { alies: string }[];
  bojTagId: number;
  displayNames: { language: string; name: string; short: string }[];
  isMeta: boolean;
  key: string;
  problemCount: number;
};
type BaekjunProblemInfoBySolAc = {
  problemId: number;
  titleKo: string;
  titles: [
    {
      language: string;
      languageDisplayName: string;
      title: string;
      isOriginal: boolean;
    }
  ];
  isSolvable: boolean;
  isPartial: boolean;
  acceptedUserCount: number;
  level: string;
  votedUserCount: number;
  sprout: boolean;
  givesNoRating: boolean;
  isLevelLocked: boolean;
  averageTries: number;
  official: boolean;
  tags: CategoryTagByBaekjunProblem[];
};

export { BaekjunProblemInfoBySolAc, CategoryTagByBaekjunProblem };
