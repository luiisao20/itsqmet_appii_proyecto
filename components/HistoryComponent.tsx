import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../assets/colors";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { GameHistory } from "../interfaces/interfaces";
import { getFormattedDate } from "../helpers/getFormattedDate";

interface Props {
  game: GameHistory;
}

const HistoryComponent = ({ game }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{getFormattedDate(game.date)}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View style={{ gap: 6 }}>
          {game.won && (
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <FontAwesome name="hashtag" size={20} color={Colors.input} />
              <Text style={styles.paragraph}>{game.tries} Intentos</Text>
            </View>
          )}
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <AntDesign name="clock-circle" size={20} color={Colors.input} />
            <Text style={styles.paragraph}>{game.time} segundos</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <MaterialCommunityIcons
              name="gamepad-variant-outline"
              size={20}
              color={Colors.input}
            />
            {/* <Text style={styles.paragraph}>
              {game.lvl === "easy"
                ? "Fácil"
                : game.lvl === "medium"
                ? "Medio"
                : game.lvl === "hard"
                ? "Difícil"
                : "Experto"}
            </Text> */}
          </View>
        </View>
        <FontAwesome
          name={game.won ? "trophy" : "close"}
          size={50}
          color={game.won ? Colors.input : Colors.dotRedLow}
        />
      </View>
    </View>
  );
};

export default HistoryComponent;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#ffffff33",
    borderBottomColor: "#ffffff33",
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  subtitle: {
    fontWeight: "500",
    fontSize: 20,
    color: "#d1d1d1",
    marginTop: 6,
  },
  paragraph: {
    fontWeight: "300",
    fontSize: 14,
    color: Colors.buttonLight,
    letterSpacing: 2,
  },
});
