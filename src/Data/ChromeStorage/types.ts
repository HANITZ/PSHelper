type BaekjunStartTime = {
  baekjunStartTime: number;
};

type BaekjunProblemId = {
  baekjunProblemId: string;
};

type ChromeStorage = {
  Timer: boolean;
  Upload: boolean;
  SubmissionId: string;
  BaekjunProblemId: string;
  BaekjunStartTime: number;
  ProgrammersStartTime: number;
};
type ProgrammersProblem = {
  isSolved: string;
  title: string;
  level: string;
  finishedCount: string;
  acceptanceRate: string;
};

export {
  BaekjunStartTime,
  BaekjunProblemId,
  ChromeStorage,
  ProgrammersProblem,
};
