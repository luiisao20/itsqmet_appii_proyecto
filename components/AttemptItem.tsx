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
  const getFeedbackIndicators = () => {
    const indicators: string[] = [];

    // Correctos
    for (let i = 0; i < attempt.feedback.correct; i++) {
      indicators.push("#fff");
    }

    // Posición incorrecta
    for (let i = 0; i < attempt.feedback.wrongPosition; i++) {
      indicators.push(Colors.red);
    }

    // Vacíos
    while (indicators.length < 4) {
      indicators.push("#868686");
    }

    return indicators;
  };

  const feedbackIndicators = getFeedbackIndicators();

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
            color={feedbackIndicators[0]}
            select={false}
            shadow={false}
          />
          <Dot
            size={10}
            color={feedbackIndicators[1]}
            select={false}
            shadow={false}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Dot
            size={10}
            color={feedbackIndicators[2]}
            select={false}
            shadow={false}
          />
          <Dot
            size={10}
            color={feedbackIndicators[3]}
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
