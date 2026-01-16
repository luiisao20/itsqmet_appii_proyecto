import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../assets/colors";
import { FlatList } from "react-native-gesture-handler";
import HistoryComponent from "../components/HistoryComponent";
import HeaderDots from "../components/HeaderDots";
import GoBackButton from "../components/GoBackButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator";
import { Feather } from "@expo/vector-icons";
import Footer from "../components/Footer";

export interface Game {
  date: string;
  win: boolean;
  tries: number;
  time: number;
  lvl: "easy" | "medium" | "hard" | "expert";
}

type Props = StackScreenProps<RootStackParams, "history">;

const games: Game[] = [
  { date: "12 - ene - 2026", win: true, tries: 3, time: 120, lvl: "easy" },
  { date: "12 - feb - 2026", win: false, tries: 5, time: 240, lvl: "medium" },
  { date: "5 - ene - 2026", win: true, tries: 2, time: 95, lvl: "hard" },
  { date: "8 - ene - 2026", win: false, tries: 6, time: 310, lvl: "expert" },
  { date: "20 - mar - 2026", win: true, tries: 4, time: 180, lvl: "medium" },
  { date: "12 - feb - 2026", win: false, tries: 7, time: 400, lvl: "hard" },
  { date: "15 - ene - 2026", win: true, tries: 1, time: 60, lvl: "easy" },
  { date: "1 - ene - 2026", win: true, tries: 3, time: 150, lvl: "expert" },
  { date: "20 - ene - 2026", win: false, tries: 8, time: 500, lvl: "medium" },
  { date: "31 - ene - 2026", win: true, tries: 2, time: 110, lvl: "hard" },
];

const HistoryScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.background }}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={games}
          renderItem={({ item }) => <HistoryComponent game={item} />}
          ListHeaderComponent={() => (
            <View>
              <HeaderDots />
              <GoBackButton onPress={() => navigation.pop()} />
              <Text style={styles.subtitle}>Historial de juegos</Text>
            </View>
          )}
          ListFooterComponent={() => <Footer />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "500",
    fontSize: 24,
    color: "#d1d1d1",
    letterSpacing: 2,
    marginTop: 6,
    textAlign: "center",
    paddingBottom: 10,
  },
});
