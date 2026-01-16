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
import { RootStackParams } from "../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";

import { Feather, MaterialIcons } from "@expo/vector-icons";

import { Colors } from "../assets/colors";
import GoBackButton from "../components/GoBackButton";
import HeaderDots from "../components/HeaderDots";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";

type Props = StackScreenProps<RootStackParams, "password">;

interface PasswordUpdate {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const PasswordScreen = ({ navigation }: Props) => {
  const [dataToUpdate, setDataToUpdate] = useState<PasswordUpdate>({
    confirmNewPassword: "",
    newPassword: "",
    oldPassword: "",
  });

  const handleUpdate = () => {
    if (
      dataToUpdate.oldPassword.trim() === "" ||
      dataToUpdate.newPassword.trim() === "" ||
      dataToUpdate.confirmNewPassword.trim() === ""
    ) {
      Alert.alert("Error", "Debes llenar todos los datos");
      return;
    }

    // TODO: action for update passwors
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
              <Text style={styles.title}>Actualiza tu contraseña</Text>
              <InputComponent
                icon={
                  <MaterialIcons
                    name="password"
                    size={20}
                    color={Colors.input}
                  />
                }
                autoCapitalize="none"
                placeholder="Contraseña antigua"
                inputMode="text"
                secureTextEntry
                onChangeText={(text) =>
                  setDataToUpdate((prev) => ({ ...prev, oldPassword: text }))
                }
                value={dataToUpdate.oldPassword}
              />
              <InputComponent
                icon={
                  <MaterialIcons
                    name="password"
                    size={20}
                    color={Colors.input}
                  />
                }
                autoCapitalize="none"
                placeholder="Contraseña nueva"
                inputMode="text"
                secureTextEntry
                onChangeText={(text) =>
                  setDataToUpdate((prev) => ({ ...prev, newPassword: text }))
                }
                value={dataToUpdate.newPassword}
              />
              <InputComponent
                icon={
                  <Feather name="check-circle" size={24} color={Colors.input} />
                }
                autoCapitalize="none"
                placeholder="Repite la contraseña "
                inputMode="text"
                secureTextEntry
                onChangeText={(text) =>
                  setDataToUpdate((prev) => ({
                    ...prev,
                    confirmNewPassword: text,
                  }))
                }
                value={dataToUpdate.confirmNewPassword}
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

export default PasswordScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    marginBottom: 10,
  },
});
