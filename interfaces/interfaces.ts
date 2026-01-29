export interface LeaderboardInterface {
  user: string;
  score: number;
  rank: number;
}

export interface UserApp {
  username: string;
  fullName: string;
  photoUrl?: string;
}

export interface GameHistory {
  date: string;
  points: number;
  time: number;
  tries: number;
  won: boolean;
}

export interface GameRank {
  userId: string;
  username: string;
  totalPoints: number;
}

export interface Attempt {
  colors: string[];
  feedback: {
    correct: number;
    wrongPosition: number;
  };
}
