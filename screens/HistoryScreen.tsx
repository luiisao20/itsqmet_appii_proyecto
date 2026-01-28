import { RefreshControl, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../assets/colors";
import { FlatList } from "react-native-gesture-handler";
import HistoryComponent from "../components/HistoryComponent";
import HeaderDots from "../components/HeaderDots";
import GoBackButton from "../components/GoBackButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator";
import Footer from "../components/Footer";
import { GameHistory } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { getUserHistory } from "../core/database/get-user-history.action";

export interface Game {
  date: string;
  win: boolean;
  tries: number;
  time: number;
  lvl: "easy" | "medium" | "hard" | "expert";
}

type Props = StackScreenProps<RootStackParams, "history">;

const HistoryScreen = ({ navigation }: Props) => {
  const [history, setHistory] = useState<GameHistory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { user } = useAuthStore();

  useEffect(() => {
    getRank();
  }, []);

  const getRank = async () => {
    try {
      setIsLoading(true);
      // const dataList = await getUserHistory(user?.id!);
      // setRank(dataList);

      setHistory(dataHistory);
    } catch (error) {
      console.log(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.background }}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={history}
          renderItem={({ item }) => <HistoryComponent game={item} />}
          ListHeaderComponent={() => (
            <View>
              <HeaderDots />
              <GoBackButton onPress={() => navigation.pop()} />
              <Text style={styles.subtitle}>Historial de juegos</Text>
            </View>
          )}
          ListFooterComponent={() => <Footer />}
          refreshControl={
            <RefreshControl onRefresh={getRank} refreshing={isLoading} />
          }
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

const dataHistory: GameHistory[] = [
  { date: "2024-06-01", points: 50, time: 120, tries: 3, won: true },
  { date: "2024-06-02", points: 30, time: 200, tries: 5, won: false },
  { date: "2024-06-03", points: 70, time: 90, tries: 2, won: true },
  { date: "2024-06-04", points: 20, time: 250, tries: 6, won: false },
  { date: "2024-06-05", points: 60, time: 110, tries: 3, won: true },
  { date: "2024-06-06", points: 40, time: 180, tries: 4, won: false },
  { date: "2024-06-07", points: 80, time: 80, tries: 1, won: true },
  { date: "2024-06-08", points: 25, time: 220, tries: 5, won: false },
  { date: "2024-06-09", points: 55, time: 130, tries: 3, won: true },
  { date: "2024-06-10", points: 35, time: 190, tries: 4, won: false },
];
