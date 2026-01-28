import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../assets/colors";
import { FlatList } from "react-native-gesture-handler";
import HistoryComponent from "../components/HistoryComponent";
import HeaderDots from "../components/HeaderDots";
import GoBackButton from "../components/GoBackButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { GameHistory } from "../interfaces/interfaces";
import { getUserHistory } from "../core/database/get-user-history.action";
import { useAuthStore } from "../store/useAuthStore";

type Props = StackScreenProps<RootStackParams, "history">;

const HistoryScreen = ({ navigation }: Props) => {
  const [elements, setElements] = useState<GameHistory[]>([]);

  const { user } = useAuthStore();

  const getHistory = async () => {
    try {
      const history = await getUserHistory(user?.id!);
      setElements(history);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistory();
  }, [])

  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.background }}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={elements}
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
