import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import HeaderDots from "../components/HeaderDots";
import ButtonComponent from "../components/ButtonComponent";
import { StackScreenProps } from "@react-navigation/stack";
import { RootBottomTabParams } from "../navigation/BottomNavigator";
import Footer from "../components/Footer";
import { RootStackParams } from "../navigation/StackNavigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Colors } from "../assets/colors";
import { useAudioPlayer } from "expo-audio";

const audioSource = require("../assets/sounds/background-music.mp3");

type Props = CompositeScreenProps<
  BottomTabScreenProps<RootBottomTabParams, "home">,
  StackScreenProps<RootStackParams, "tabs">
>;

export default function HomeScreen({ navigation }: Props) {
  const [isPLaying, setsPLaying] = useState<boolean>(true);
  const player = useAudioPlayer(audioSource);

  function togglePlayMusic() {
    if (player.playing) {
      player.pause();
      setsPLaying(false);
    } else {
      player.play();
      setsPLaying(true);
    }
  }

  useEffect(() => {
    player.loop = true;
    player.play();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View>
            <HeaderDots />
            <View style={styles.containerTitle}>
              <HeaderDots size={40} />
              <View style={{ alignItems: "center" }}>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Text style={styles.title}>MASTER</Text>
                  <Text style={[styles.title, { color: "#2FE6DE" }]}>MIND</Text>
                </View>
                <Text style={styles.subtitle}>Desafía tu lógica</Text>
              </View>
            </View>
            <View style={{ gap: 16 }}>
              <ButtonComponent
                onPress={() => navigation.navigate("game")}
                icon={
                  <MaterialIcons name="play-arrow" size={24} color="#000" />
                }
                text="Nuevo juego"
              />
              <ButtonComponent
                onPress={() => navigation.navigate("howToPlay")}
                icon={<MaterialIcons name="lightbulb" size={24} color="#fff" />}
                text="Como jugar"
                type="dark"
              />
              <ButtonComponent
                onPress={() => navigation.navigate("leaderboard")}
                icon={<Ionicons name="trophy" size={24} color="#fff" />}
                text="Tablero"
                type="dark"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 40,
              }}
            >
              <TouchableOpacity onPress={togglePlayMusic}>
                {isPLaying ? (
                  <MaterialIcons
                    name="music-off"
                    size={24}
                    color={Colors.red}
                  />
                ) : (
                  <MaterialIcons
                    name="music-note"
                    size={24}
                    color={Colors.buttonLight}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <Footer />
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
  containerTitle: {
    backgroundColor: "#ffffff0a",
    marginVertical: 60,
    marginHorizontal: 40,
    padding: 16,
    gap: 16,
    borderRadius: 24,
    borderColor: "#ffffff33",
    borderWidth: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  subtitle: {
    fontWeight: "300",
    fontSize: 16,
    color: "#d1d1d1",
    letterSpacing: 4,
    marginTop: 6,
  },
});
