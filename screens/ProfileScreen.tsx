import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { RootBottomTabParams } from "../navigation/BottomNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParams } from "../navigation/StackNavigator";
import ButtonComponent from "../components/ButtonComponent";
import Feather from "@expo/vector-icons/Feather";
import { useAuthStore } from "../store/useAuthStore";
import { UserApp } from "../interfaces/LeaderboardInterface";
import { getUserData } from "../core/database/get-user-data.action";

type Props = CompositeScreenProps<
  BottomTabScreenProps<RootBottomTabParams, "profile">,
  StackScreenProps<RootStackParams, "tabs">
>;

export default function ProfileScreen({ navigation }: Props) {
  const [userData, setUserData] = useState<UserApp>();

  const { user } = useAuthStore();

  const getUserInfo = async () => {
    const resp = await getUserData(user?.id!);

    setUserData(resp);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ paddingHorizontal: 40 }}>
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
                  <Text style={styles.profileInfoSubtitle}>
                    Nombre completo
                  </Text>
                </View>
                <Text style={styles.profileInfo}>{userData?.fullName}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 12 }}></View>
              <View style={{ width: 140 }}>
                <Text style={styles.profileInfoSubtitle}>E-mail</Text>
              </View>
              <Text style={styles.profileInfo}>{user?.email}</Text>
            </View>
            <View style={{ borderWidth: 0.5, borderColor: "#ffffff1c" }} />
          </View>
          <View style={{ gap: 20, marginTop: 20 }}>
            <ButtonComponent
              onPress={() => navigation.navigate("history")}
              icon={<MaterialIcons name="history" size={20} color="white" />}
              type="dark"
              text="Historial"
            />
            <ButtonComponent
              onPress={() => navigation.navigate("password")}
              icon={<MaterialIcons name="password" size={20} color="black" />}
              text="Actualizar contraseña"
            />
            <ButtonComponent
              onPress={() => navigation.navigate("info")}
              icon={<Feather name="edit" size={24} color="black" />}
              text="Editar información"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C3041",
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
