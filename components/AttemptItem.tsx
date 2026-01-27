import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Attempt } from "../interfaces/interfaces";
import { Colors } from "../assets/colors";
import Dot from "./Dot";

interface AttemptsListProps {
  attempt: Attempt;
  attemptIndex: number;
  attempts: number;
}

export default function AttemptItem({
  attempt,
  attemptIndex,
  attempts,
}: AttemptsListProps) {
  return (
    <View key={attemptIndex} style={styles.inactiveContainer}>
      <Text
        style={{
          color: Colors.buttonLight,
          fontWeight: "600",
          fontSize: 16,
        }}
      >
        #{attempts - attemptIndex}
      </Text>
      <View style={{ flexDirection: "row", gap: 12 }}>
        {attempt.colors.map((color, index) => (
          <Dot
            key={index}
            size={36}
            color={color}
            select={false}
            shadow={true}
          />
        ))}
      </View>

      <View>
        <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
          <Dot
            size={10}
            color={attempt.feedback.correct >= 1 ? "#fff" : "#868686"}
            select={false}
            shadow={false}
          />
          <Dot
            size={10}
            color={
              attempt.feedback.correct >= 2
                ? "#fff"
                : attempt.feedback.wrongPosition >= 1
                  ? Colors.red
                  : "#868686"
            }
            select={false}
            shadow={false}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Dot
            size={10}
            color={
              attempt.feedback.correct >= 3
                ? "#fff"
                : attempt.feedback.wrongPosition >= 1 &&
                    attempt.feedback.correct < 2
                  ? Colors.red
                  : attempt.feedback.wrongPosition >= 2 &&
                      attempt.feedback.correct === 2
                    ? Colors.red
                    : "#868686"
            }
            select={false}
            shadow={false}
          />
          <Dot
            size={10}
            color={
              attempt.feedback.correct >= 4
                ? "#fff"
                : attempt.feedback.wrongPosition >= 2 &&
                    attempt.feedback.correct < 2
                  ? Colors.red
                  : attempt.feedback.wrongPosition >= 3 &&
                      attempt.feedback.correct === 1
                    ? Colors.red
                    : attempt.feedback.wrongPosition >= 1 &&
                        attempt.feedback.correct === 2
                      ? Colors.red
                      : attempt.feedback.wrongPosition +
                            attempt.feedback.correct ===
                          4
                        ? Colors.red
                        : "#868686"
            }
            select={false}
            shadow={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inactiveContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: Colors.buttonDark,
    borderColor: "#ffffff33",
    borderWidth: 1,
    borderRadius: 12,
  },
});
