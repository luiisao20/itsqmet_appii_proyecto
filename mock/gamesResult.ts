// Definimos la interfaz
export interface GameResult {
  userId: string;
  points: number;
  time: number;
  tries: number;
  won: boolean;
}

// Creamos un array de objetos que cumplen con la interfaz
export const results: GameResult[] = [
  {
    userId: "63ba6539-0f61-4107-96fc-f603dbfdbbc4",
    points: 120,
    time: 45,
    tries: 3,
    won: true,
  },
  {
    userId: "63ba6539-0f61-4107-96fc-f603dbfdbbc4",
    points: 80,
    time: 60,
    tries: 4,
    won: false,
  },
  {
    userId: "63ba6539-0f61-4107-96fc-f603dbfdbbc4",
    points: 150,
    time: 30,
    tries: 2,
    won: true,
  },
  {
    userId: "63ba6539-0f61-4107-96fc-f603dbfdbbc4",
    points: 95,
    time: 50,
    tries: 5,
    won: false,
  },
  {
    userId: "ef4ea6cf-bf42-49cb-a58a-b58f3ab91515",
    points: 120,
    time: 45,
    tries: 3,
    won: true,
  },
  {
    userId: "ef4ea6cf-bf42-49cb-a58a-b58f3ab91515",
    points: 80,
    time: 60,
    tries: 4,
    won: false,
  },
  {
    userId: "ef4ea6cf-bf42-49cb-a58a-b58f3ab91515",
    points: 150,
    time: 30,
    tries: 2,
    won: true,
  },
  {
    userId: "ef4ea6cf-bf42-49cb-a58a-b58f3ab91515",
    points: 95,
    time: 50,
    tries: 5,
    won: false,
  },
];
