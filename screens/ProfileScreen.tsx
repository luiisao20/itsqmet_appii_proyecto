import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
import { UserApp } from "../interfaces/interfaces";
import { getUserData } from "../core/database/get-user-data.action";
import Entypo from "@expo/vector-icons/Entypo";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "../assets/colors";
import { File } from "expo-file-system";
import { uploadUserImage } from "../core/database/upload-user-image.action";

type Props = CompositeScreenProps<
  BottomTabScreenProps<RootBottomTabParams, "profile">,
  StackScreenProps<RootStackParams, "tabs">
>;

export default function ProfileScreen({ navigation }: Props) {
  const [userData, setUserData] = useState<UserApp>();
  const [image, setImage] = useState<string>();
  const [url, setUrl] = useState(
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  );

  const { user, logout } = useAuthStore();

  const getUserInfo = async () => {
    const resp = await getUserData(user?.id!);

    if (resp.photoUrl) setUrl(resp.photoUrl);

    setUserData(resp);
  };

  const uploadImage = async () => {
    if (!image) {
      return;
    }
    const file = new File(image);

    const bytes = await file.bytes();

    try {
      await uploadUserImage(bytes, user?.id!);
      Alert.alert("¡Éxito!", "La foto de perfil se actualizó con éxito");
      setImage(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  const pickImage = async (camera?: boolean) => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required.",
      );
      return;
    }
    let result;

    if (camera) {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ["images", "videos"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images", "videos"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    if (image) setUrl(image);
  }, [image]);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ paddingHorizontal: 40 }}>
            <Text style={styles.title}>Perfil</Text>
            <View style={{ position: "relative" }}>
              <Image source={{ uri: url }} style={styles.profileImage} />
              <TouchableOpacity
                onPress={() => pickImage(true)}
                style={{ position: "absolute", left: "60%", bottom: "20%" }}
              >
                <Entypo name="camera" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => pickImage()}
              style={{ marginBottom: 20 }}
            >
              <Text style={{ color: Colors.buttonLight, textAlign: "center" }}>
                Seleccionar imagen desde la galería
              </Text>
            </TouchableOpacity>
            {image && (
              <TouchableOpacity
                onPress={uploadImage}
                style={{
                  backgroundColor: Colors.buttonLight,
                  paddingVertical: 2,
                  width: "50%",
                  borderRadius: 9999,
                  alignSelf: "center",
                  marginBottom: 20,
                }}
              >
                <Text style={{ textAlign: "center", fontWeight: "700" }}>
                  Guardar imagen
                </Text>
              </TouchableOpacity>
            )}
            <View style={{ borderWidth: 0.5, borderColor: "#ffffff1c" }} />
            <View style={{ marginVertical: 20, gap: 8 }}>
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
            <ButtonComponent
              onPress={async () => {
                await logout();
                navigation.popToTop();
              }}
              // icon={<Feather name="edit" size={24} />}
              type="danger"
              text="Cerrar sesión"
              notArrow={true}
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
    marginVertical: 20,
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
