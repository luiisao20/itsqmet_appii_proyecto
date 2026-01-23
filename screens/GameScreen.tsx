import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../assets/colors";
import Dot from "../components/Dot";
import { Feather } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator";

type Props = StackScreenProps<RootStackParams, "game">;

const colors = [
  Colors.red,
  Colors.blue,
  Colors.yellow,
  Colors.green,
  Colors.pink,
  Colors.yellowLight,
];

interface Attempt {
  colors: string[];
  feedback: {
    correct: number;
    wrongPosition: number;
  };
}

export default function GameScreen({ navigation }: Props) {
  const [secretCode, setSecretCode] = useState<string[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState<string[]>([]);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    generateSecretCode();
  }, []);

  //! Código secreto aleatorio
  const generateSecretCode = () => {
    const code: string[] = [];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      code.push(colors[randomIndex]);
    }
    setSecretCode(code);
    console.log("Código secreto:", code);
  };

  const selectColor = (color: string) => {
    if (gameOver) return;

    if (currentAttempt.length < 4) {
      setCurrentAttempt([...currentAttempt, color]);
    }
  };

  //! Validar intento
  const checkAttempt = () => {
    if (currentAttempt.length !== 4) {
      Alert.alert("Atención", "Debes seleccionar 4 colores");
      return;
    }

    const feedback = calculateFeedback(currentAttempt, secretCode);

    const newAttempt: Attempt = {
      colors: [...currentAttempt],
      feedback,
    };

    setAttempts([newAttempt, ...attempts]);

    //! Ganar
    if (feedback.correct === 4) {
      setWon(true);
      setGameOver(true);
      Alert.alert("¡Felicidades!", "¡Has descifrado el código!");
    } else if (attempts.length >= 9) {
      //TODO: OJO MAXIMO 10 INTENTOS, CAMBIAR LUEGO PARA OTRAS DIFICULTADES
      setGameOver(true);
      Alert.alert("Juego terminado", "Se acabaron los intentos");
    }

    setCurrentAttempt([]);
  };

  const calculateFeedback = (attempt: string[], secret: string[]) => {
    let correct = 0;
    let wrongPosition = 0;

    const secretCopy = [...secret];
    const attemptCopy = [...attempt];

    //! Correctos en posición correcta
    for (let i = 0; i < 4; i++) {
      if (attemptCopy[i] === secretCopy[i]) {
        correct++;
        secretCopy[i] = "MATCHED";
        attemptCopy[i] = "CHECKED";
      }
    }

    //! Correctos en posición incorrecta
    for (let i = 0; i < 4; i++) {
      if (attemptCopy[i] !== "CHECKED") {
        const index = secretCopy.indexOf(attemptCopy[i]);
        if (index !== -1) {
          wrongPosition++;
          secretCopy[index] = "MATCHED";
        }
      }
    }

    return { correct, wrongPosition };
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{ gap: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.goBack}
          >
            <Feather
              name="arrow-left-circle"
              size={36}
              color={Colors.buttonLight}
            />
          </TouchableOpacity>

          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 12 }}
          >
            <Text style={styles.title}>MASTERMIND</Text>
          </View>

          <View
            style={[
              styles.inactiveContainer,
              { justifyContent: "center", flexDirection: "column" },
            ]}
          >
            <Text style={styles.subtitle}>Descifra el código</Text>
            <View style={{ flexDirection: "row", gap: 12 }}>
              {[0, 1, 2, 3].map((index) => (
                <Dot
                  key={index}
                  size={36}
                  color={gameOver ? secretCode[index] : "transparent"}
                  select={true}
                  shadow={false}
                  borderColor="#175e5a"
                  borderStyle="dotted"
                />
              ))}
            </View>
          </View>

          {attempts.map((attempt, attemptIndex) => (
            <View key={attemptIndex} style={styles.inactiveContainer}>
              <Text
                style={{
                  color: Colors.buttonLight,
                  fontWeight: "600",
                  fontSize: 16,
                }}
              >
                #{attempts.length - attemptIndex}
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
          ))}
        </ScrollView>

        <View style={styles.activeContainer}>
          <View style={{ flexDirection: "row", gap: 12 }}>
            {[0, 1, 2, 3].map((index) => (
              <Dot
                key={index}
                size={36}
                color={currentAttempt[index] || "#868686"}
                select={currentAttempt.length === index}
                shadow={true}
              />
            ))}
          </View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <TouchableOpacity
              onPress={checkAttempt}
              style={[styles.actionButton, { backgroundColor: Colors.green }]}
              disabled={gameOver}
            >
              <Feather name="check" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: "#ffffff0a", paddingVertical: 20 }}>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 16,
              fontWeight: "600",
              color: "white",
              textAlign: "center",
            }}
          >
            Elige el orden
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 12,
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}
          >
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => selectColor(color)}
                disabled={gameOver}
              >
                <Dot size={36} color={color} select={false} shadow={true} />
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <View style={[styles.dot, { backgroundColor: "#fff" }]}></View>
              <Text style={styles.titleDot}>Correcto</Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <View
                style={[styles.dot, { backgroundColor: Colors.red }]}
              ></View>
              <Text style={styles.titleDot}>Posición Incorrecta</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C3041",
  },
  goBack: {
    position: "absolute",
    marginLeft: 20,
    marginTop: 2,
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    color: "white",
    alignSelf: "center",
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 9999,
  },
  titleDot: {
    color: "white",
    fontWeight: "400",
    fontSize: 14,
  },
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
  activeContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 12,
    margin: 20,
    padding: 16,
    backgroundColor: "#175e5a",
    borderColor: Colors.buttonLight,
    borderWidth: 2,
    borderRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 6,
    shadowColor: Colors.buttonLight,
  },
  subtitle: {
    fontWeight: "300",
    fontSize: 16,
    color: "#d1d1d1",
    letterSpacing: 4,
    marginTop: 6,
  },
  actionButton: {
    backgroundColor: Colors.red,
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
