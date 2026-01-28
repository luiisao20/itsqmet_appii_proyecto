import { results } from "../../mock/gamesResult";
import { supabase } from "../../supabase/config";

export const insertArrayGames = async () => {
  const payload = results.map((item) => ({
    user_id: item.userId,
    points: item.points,
    time: item.time,
    tries: item.tries,
    won: item.won,
  }));

  const { error } = await supabase.from("games").insert(payload);
  console.log(error);
  

  if (error) throw new Error(error.message);
};
