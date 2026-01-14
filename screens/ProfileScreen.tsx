import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Perfil</Text>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          style={styles.profileImage}
        />
        <View style={{ borderWidth: 0.5, borderColor: "#ffffff1c" }} />
        <View style={{ marginVertical: 20, gap: 18 }}>
          <Text style={styles.profileInfoTitle}>Información de perfil</Text>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <View style={{ width: 140 }}>
              <Text style={styles.profileInfoSubtitle}>Nombre completo</Text>
            </View>
            <Text style={styles.profileInfo}>John Doe</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <View style={{ width: 140 }}>
              <Text style={styles.profileInfoSubtitle}>E-mail</Text>
            </View>
            <Text style={styles.profileInfo}>correo@correo.com</Text>
          </View>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: "#ffffff1c" }} />
        <TouchableOpacity style={styles.button}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <MaterialIcons name="history" size={24} color="#fff" />
            <Text style={[styles.buttonText, { color: "#fff" }]}>
              Ver historial
            </Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#345879" />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C3041",
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginVertical: 32,
    borderWidth: 5,
    borderColor: "#ffffff33",
  },
  profileInfoTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
  },
  profileInfoSubtitle: {
    fontSize: 16,
    color: "#d1d1d1",
    fontWeight: "600",
  },
  profileInfo: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#ffffff0a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 32,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    borderColor: "#ffffff33",
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#fff",
  },
});
