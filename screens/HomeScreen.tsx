import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 6,
                paddingTop: 12,
              }}
            >
              <View
                style={[
                  styles.headerCircles,
                  { backgroundColor: "#ff3d47", shadowColor: "#ff3d47" },
                ]}
              ></View>
              <View
                style={[
                  styles.headerCircles,
                  { backgroundColor: "#FFDF20", shadowColor: "#FFDF20" },
                ]}
              ></View>
              <View
                style={[
                  styles.headerCircles,
                  { backgroundColor: "#2FE6DE", shadowColor: "#2FE6DE" },
                ]}
              ></View>
              <View
                style={[
                  styles.headerCircles,
                  { backgroundColor: "#00BC7D", shadowColor: "#00BC7D" },
                ]}
              ></View>
            </View>
            <View style={styles.containerTitle}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 12,
                  paddingTop: 10,
                }}
              >
                <View
                  style={[
                    styles.containerCircles,
                    { backgroundColor: "#ff3d47" },
                  ]}
                ></View>
                <View
                  style={[
                    styles.containerCircles,
                    { backgroundColor: "#00A6F4" },
                  ]}
                ></View>
                <View
                  style={[
                    styles.containerCircles,
                    { backgroundColor: "#FE9A00" },
                  ]}
                ></View>
                <View
                  style={[
                    styles.containerCircles,
                    { backgroundColor: "#00BC7D" },
                  ]}
                ></View>
              </View>
              <View style={{ alignItems: "center" }}>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Text style={styles.title}>MASTER</Text>
                  <Text style={[styles.title, { color: "#2FE6DE" }]}>MIND</Text>
                </View>
                {/* <Text style={styles.title}>MOBILE</Text> */}
                <Text style={styles.subtitle}>Desafía tu lógica</Text>
              </View>
            </View>
            <View style={{ gap: 16 }}>
              <TouchableOpacity style={styles.mainButton}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <MaterialIcons name="play-arrow" size={24} color="#000" />
                  <Text style={[styles.buttonText, { color: "#000" }]}>
                    Nuevo juego
                  </Text>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="#345879" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <MaterialIcons name="lightbulb" size={24} color="#fff" />
                  <Text style={styles.buttonText}>Como jugar</Text>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="#345879" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <Ionicons name="trophy" size={24} color="#fff" />
                  <Text style={styles.buttonText}>Tablero</Text>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="#345879" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.versionText}>Version: 1.0.0</Text>
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
  headerCircles: {
    width: 12,
    height: 12,
    borderRadius: 6,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
  containerCircles: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
  button: {
    backgroundColor: "#ffffff0a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 40,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    borderColor: "#ffffff33",
    borderWidth: 1,
  },
  mainButton: {
    backgroundColor: "#2FE6DE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 40,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
    shadowColor: "#2FE6DE",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#fff",
  },
  versionText: {
    fontWeight: "300",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 16,
    color: "#ccccccad",
  },
});
