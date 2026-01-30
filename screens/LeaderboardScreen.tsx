import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../assets/colors";
import { Feather } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator";
import TopCircles from "../components/TopCircles";
import LeaderboardItem from "../components/LeaderBoardItem";
import { GameRank } from "../interfaces/interfaces";
import { getRanks } from "../core/database/get-ranks.action";
import { useAuthStore } from "../store/useAuthStore";

type Props = StackScreenProps<RootStackParams, "leaderboard">;

export default function LeaderboardScreen({ navigation }: Props) {
  const [rank, setRank] = useState<GameRank[]>([]);
  const [myRank, setMyRank] = useState<GameRank>();
  const [myRankIndex, setMyRankIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAuthStore();

  useEffect(() => {
    getRank();
  }, []);

  const getRank = async () => {
    try {
      setIsLoading(true);
      const dataList = await getRanks();
      setRank(dataList);

      if (user?.id) {
        const userRankIndex = dataList.findIndex(
          (item) => item.userId === user.id,
        );

        if (userRankIndex !== -1) {
          setMyRank(dataList[userRankIndex]);
          setMyRankIndex(userRankIndex);
        }
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ position: "relative", flex: 1 }}>
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
          <Text style={styles.title}>Tabla de líderes</Text>
          <View style={styles.containerGlobal}>
            <View style={styles.containerGlobalBackground}>
              <Text style={styles.titleContainerGlobal}>Global</Text>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <View style={styles.circleContainer}>
              {rank && rank.length > 0 && (
                <View>
                  <TopCircles
                    alignSelf="center"
                    height={120}
                    width={120}
                    top={0}
                    color={Colors.buttonLight}
                    user={rank[0].username}
                    rank={1}
                    score={rank[0].totalPoints}
                    photoUrl={rank[0].photoUrl}
                  />
                </View>
              )}
              {rank && rank.length > 1 && (
                <TopCircles
                  alignSelf="flex-start"
                  color={Colors.pink}
                  user={rank[1].username}
                  rank={2}
                  score={rank[1].totalPoints}
                  photoUrl={rank[1].photoUrl}
                />
              )}
              {rank && rank.length > 2 && (
                <TopCircles
                  alignSelf="flex-end"
                  color={Colors.green}
                  user={rank[2].username}
                  rank={3}
                  score={rank[2].totalPoints}
                  photoUrl={rank[2].photoUrl}
                />
              )}
            </View>
            {rank && rank.length > 0 && (
              <FlatList
                style={{
                  marginHorizontal: 40,
                  marginTop: 40,
                  marginBottom: 120,
                }}
                data={rank.slice(3)}
                renderItem={({ item, index }) => (
                  <LeaderboardItem item={item} index={index + 3} />
                )}
                refreshControl={
                  <RefreshControl onRefresh={getRank} refreshing={isLoading} />
                }
              />
            )}
          </View>

          {myRank && myRank.userId && (
            <View
              style={{
                position: "absolute",
                bottom: 20,
                right: 40,
                left: 40,
              }}
            >
              <LeaderboardItem
                item={myRank}
                index={myRankIndex}
                backgroundColor={Colors.background}
                shadowColor={true}
              ></LeaderboardItem>
            </View>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
  containerGlobal: {
    backgroundColor: "#ffffff0a",
    margin: 40,
    borderColor: "#ffffff33",
    borderWidth: 1,
    borderRadius: 12,
    overflow: "hidden",
    padding: 4,
  },
  containerGlobalBackground: {
    backgroundColor: Colors.buttonLight,
    borderRadius: 8,
    padding: 5,
  },
  titleContainerGlobal: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    letterSpacing: 1,
  },
  circleContainer: {
    height: 100,
    marginHorizontal: 40,
    marginBottom: 80,
  },
});
