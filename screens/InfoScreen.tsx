import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator";

import { Entypo, Ionicons } from "@expo/vector-icons";

import { Colors } from "../assets/colors";
import HeaderDots from "../components/HeaderDots";
import GoBackButton from "../components/GoBackButton";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";

type Props = StackScreenProps<RootStackParams, "info">;

interface InfoUpdate {
  name: string;
  username: string;
}

const InfoScreen = ({ navigation }: Props) => {
  const [dataToUpdate, setDataToUpdate] = useState<InfoUpdate>({
    name: "",
    username: "",
  });

  const handleUpdate = () => {
    if (
      dataToUpdate.name.trim() === "" &&
      dataToUpdate.username.trim() === ""
    ) {
      Alert.alert("Error", "Debes llenar todos los datos");
      return;
    }

    // TODO: Update user info
  };

  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.background }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <HeaderDots />
            <GoBackButton onPress={() => navigation.pop()} />
            <View
              style={{
                position: "relative",
                flex: 1,
                justifyContent: "center",
                gap: 20,
                paddingHorizontal: 40,
              }}
            >
              <Text style={styles.title}>Actualiza tu información</Text>
              <InputComponent
                icon={<Ionicons name="text" size={24} color={Colors.input} />}
                autoCapitalize="words"
                placeholder="Nombres"
                inputMode="text"
                onChangeText={(text) =>
                  setDataToUpdate((prev) => ({ ...prev, name: text }))
                }
                value={dataToUpdate.name}
              />
              <InputComponent
                icon={<Entypo name="email" size={24} color={Colors.input} />}
                autoCapitalize="none"
                placeholder="Nombre de usuario"
                inputMode="text"
                secureTextEntry
                onChangeText={(text) =>
                  setDataToUpdate((prev) => ({ ...prev, username: text }))
                }
                value={dataToUpdate.username}
              />
              <ButtonComponent
                onPress={handleUpdate}
                // disabled={loading}
                text="Actualizar"
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    marginBottom: 10,
  },
});
