import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../assets/colors";
import Dot from "../components/Dot";
import { Feather } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator";

type Props = StackScreenProps<RootStackParams, "game">;

export default function GameScreen({ navigation }: Props) {
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
          <Text style={styles.title}>MASTERMIND</Text>
          <View
            style={[
              styles.inactiveContainer,
              { justifyContent: "center", flexDirection: "column" },
            ]}
          >
            <Text style={styles.subtitle}>Descifra el código</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dots.slice(0, 4)}
              renderItem={() => (
                <Dot
                  size={50}
                  color={"#00000000"}
                  select={true}
                  shadow={false}
                  borderColor="#175e5a"
                  borderStyle="dotted"
                />
              )}
              contentContainerStyle={{ gap: 12 }}
            />
          </View>
          <View style={styles.inactiveContainer}>
            <Text
              style={{
                color: Colors.buttonLight,
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              # 1
            </Text>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dots.slice(0, 4)}
                renderItem={({ item, index }) => (
                  <Dot size={50} color={item.color} shadow={false} />
                )}
                contentContainerStyle={{ gap: 12 }}
              />
            </View>
            <View>
              <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                <Dot size={10} color={"#fff"} select={false} shadow={false} />
                <Dot
                  size={10}
                  color={Colors.red}
                  select={false}
                  shadow={false}
                />
              </View>
              <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                <Dot size={10} color={"#fff"} select={false} shadow={false} />
                <Dot
                  size={10}
                  color={Colors.red}
                  select={false}
                  shadow={false}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.activeContainer}>
          <Text
            style={{
              color: Colors.buttonLight,
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            Activo
          </Text>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dots.slice(0, 4)}
              renderItem={({ item, index }) => (
                <Dot
                  size={50}
                  color={index === 0 || index === 1 ? item.color : "#868686"}
                  shadow={false}
                />
              )}
              contentContainerStyle={{ gap: 12 }}
            />
          </View>
          <View>
            <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
              <Dot size={10} color={"#fff"} select={false} shadow={false} />
              <Dot size={10} color={Colors.red} select={false} shadow={false} />
            </View>
            <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
              <Dot size={10} color={"#fff"} select={false} shadow={false} />
              <Dot size={10} color={Colors.red} select={false} shadow={false} />
            </View>
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
          <FlatList
            style={{
              alignSelf: "center",
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dots}
            renderItem={({ item, index }) => (
              <Dot
                size={50}
                color={item.color}
                select={index === 1}
                shadow={true}
              />
            )}
            contentContainerStyle={{ gap: 12 }}
          />
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
    justifyContent: "space-between",
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
});

const dots = [
  { color: Colors.red },
  { color: Colors.blue },
  { color: Colors.yellow },
  { color: Colors.green },
  { color: Colors.pink },
  { color: Colors.yellowLight },
];
