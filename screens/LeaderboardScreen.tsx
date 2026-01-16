import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../assets/colors";
import { Feather } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator";
import TopCircles from "../components/TopCircles";
import LeaderboardItem from "../components/LeaderBoardItem";
import { LeaderboardInterface } from "../interfaces/LeaderboardInterface";

type Props = StackScreenProps<RootStackParams, "game">;

export default function LeaderboardScreen({ navigation }: Props) {
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
          <View style={styles.circleContainer}>
            <View>
              <TopCircles
                alignSelf="center"
                height={120}
                width={120}
                top={0}
                color={Colors.buttonLight}
                user="JohnDoe"
                rank={1}
                score={200}
              />
            </View>
            <TopCircles
              alignSelf="flex-start"
              color={Colors.pink}
              user="Batman"
              rank={2}
              score={150}
            />
            <TopCircles
              alignSelf="flex-end"
              color={Colors.green}
              user="Deadpool"
              rank={3}
              score={120}
            />
          </View>
          <FlatList
            style={{ marginHorizontal: 40, marginTop: 40, marginBottom: 120 }}
            data={leaderboardList}
            renderItem={({ item }) => <LeaderboardItem item={item} />}
          ></FlatList>
          <View
            style={{
              position: "absolute",
              bottom: 20,
              right: 40,
              left: 40,
            }}
          >
            <LeaderboardItem
              item={leaderboardList[3]}
              backgroundColor={Colors.background}
              shadowColor={true}
            ></LeaderboardItem>
          </View>
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

const leaderboardList: LeaderboardInterface[] = [
  {
    user: "Toreto",
    score: 99,
    rank: 4,
  },
  {
    user: "LinternaVerde",
    score: 95,
    rank: 5,
  },
  {
    user: "Flash",
    score: 90,
    rank: 6,
  },
  {
    user: "Yo",
    score: 80,
    rank: 7,
  },
  {
    user: "Superman",
    score: 75,
    rank: 8,
  },
  {
    user: "IronMan",
    score: 70,
    rank: 9,
  },
  {
    user: "SpiderMan",
    score: 65,
    rank: 10,
  },
  {
    user: "Thor",
    score: 60,
    rank: 11,
  },
  {
    user: "Hulk",
    score: 55,
    rank: 12,
  },
  {
    user: "BlackPanther",
    score: 50,
    rank: 13,
  },
  {
    user: "DoctorStrange",
    score: 45,
    rank: 14,
  },
  {
    user: "CaptainAmerica",
    score: 40,
    rank: 15,
  },
];
