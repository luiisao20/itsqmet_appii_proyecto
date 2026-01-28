import { supabase } from "../../supabase/config";

export const insertGameData = async (
  userId: string,
  points: number,
  time: number,
  tries: number,
  won: boolean,
) => {
  const { error } = await supabase.from("games").insert({
    user_id: userId,
    points,
    time,
    tries,
    won,
  });

  if (error) throw new Error(error.message);
};
