import { GameHistory } from "../../interfaces/interfaces";
import { supabase } from "../../supabase/config";

export const getUserHistory = async (
  userId: string,
): Promise<GameHistory[]> => {
  const games: GameHistory[] = [];

  const { data, error } = await supabase
    .from("games")
    .select()
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  for (const element of data) {
    games.push({
      date: element.date,
      points: element.points,
      time: element.time,
      tries: element.tries,
      won: element.won,
    });
  }

  return games;
};
