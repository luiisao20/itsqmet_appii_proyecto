import { GameRank } from "../../interfaces/interfaces";
import {supabase} from "../../supabase/config";

export const getRanks = async (): Promise<GameRank[]> => {
  const ranks: GameRank[] = [];

  const {data, error} = await supabase.rpc('get_rank')

  if (error) throw new Error(error.message)

  for (const element of data) {
    ranks.push({
      userId: element.id,
      totalPoints: element.total_points,
      username: element.username
    })
  }

  return ranks;
};
