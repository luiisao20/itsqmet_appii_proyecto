import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GameRank } from "../interfaces/interfaces";
import { Colors } from "../assets/colors";

interface Props {
  item: GameRank;
  backgroundColor?: string;
  shadowColor?: boolean;
  index: number;
}

const LeaderboardItem = ({
  item,
  backgroundColor,
  shadowColor,
  index,
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor ?? Colors.buttonDark,
          shadowColor: shadowColor ? Colors.yellowLight : undefined,
          borderColor: shadowColor ? Colors.yellowLight : undefined,
          borderWidth: shadowColor ? 2 : undefined,
        },
      ]}
    >
      <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
        <Text style={styles.textItem}># {index + 1}</Text>
        <Text style={styles.textItem}>{item.username}</Text>
      </View>
      <Text style={styles.textItem}>{item.totalPoints}pts</Text>
    </View>
  );
};

export default LeaderboardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderColor: "#ffffff33",
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
  },
  textItem: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
