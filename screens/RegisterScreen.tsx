import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator";

import { Colors } from "../assets/colors";
import HeaderDots from "../components/HeaderDots";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import Footer from "../components/Footer";
import { registerAction } from "../core/auth/register.action";

import {
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

type Props = StackScreenProps<RootStackParams, "register">;

export interface RegisterNewUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

const RegisterScreen = ({ navigation }: Props) => {
  const [registerInfo, setRegisterInfo] = useState<RegisterNewUser>({
    confirmPassword: "",
    email: "",
    name: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    if (
      registerInfo.email.trim() === "" ||
      registerInfo.name.trim() === "" ||
      registerInfo.password.trim() === ""
    ) {
      Alert.alert(
        "¡Error!",
        "Todos los campos son necesarios, asegúrate de llenar toda la información"
      );
      setLoading(false);
      return;
    }

    if (registerInfo.confirmPassword !== registerInfo.password) {
      Alert.alert("¡Error", "Las contraseñas no son iguales");
      return;
    }

    try {
      const user = await registerAction(registerInfo);
      console.log(user);

      navigation.navigate("tabs");
    } catch (error) {
      Alert.alert("¡Error!", `Ha ocurrido un error!\n ${error}`);
    }
    setLoading(false);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
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
              <HeaderDots />
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.title}>Registro</Text>
                <Text style={styles.subtitle}>
                  Rellena tus datos y empieza el desafío...
                </Text>
                <View style={{ gap: 20 }}>
                  <InputComponent
                    icon={
                      <Ionicons name="person" size={24} color={Colors.input} />
                    }
                    placeholder="Nombres completos"
                    inputMode="text"
                    onChangeText={(text) =>
                      setRegisterInfo((prev) => ({ ...prev, name: text }))
                    }
                    value={registerInfo.name}
                    autoCapitalize="words"
                  />
                  <InputComponent
                    icon={
                      <Entypo name="email" size={20} color={Colors.input} />
                    }
                    autoCapitalize="none"
                    placeholder="Elige un nombre de usuario"
                    inputMode="email"
                    onChangeText={(text) =>
                      setRegisterInfo((prev) => ({ ...prev, username: text }))
                    }
                    value={registerInfo.username}
                  />
                  <InputComponent
                    icon={
                      <MaterialCommunityIcons
                        name="email-open-outline"
                        size={24}
                        color="black"
                      />
                    }
                    autoCapitalize="none"
                    placeholder="Correo electrónico"
                    inputMode="email"
                    onChangeText={(text) =>
                      setRegisterInfo((prev) => ({ ...prev, email: text }))
                    }
                    value={registerInfo.email}
                  />
                  <InputComponent
                    icon={
                      <MaterialIcons
                        name="password"
                        size={20}
                        color={Colors.input}
                      />
                    }
                    placeholder="Contraseña"
                    autoCapitalize="none"
                    inputMode="text"
                    secureTextEntry
                    onChangeText={(text) =>
                      setRegisterInfo((prev) => ({ ...prev, password: text }))
                    }
                    value={registerInfo.password}
                  />
                  <InputComponent
                    icon={
                      <Feather
                        name="check-circle"
                        size={24}
                        color={Colors.input}
                      />
                    }
                    placeholder="Confirmar contraseña"
                    autoCapitalize="none"
                    inputMode="text"
                    secureTextEntry
                    onChangeText={(text) =>
                      setRegisterInfo((prev) => ({
                        ...prev,
                        confirmPassword: text,
                      }))
                    }
                    value={registerInfo.confirmPassword}
                  />
                  <ButtonComponent
                    onPress={handleRegister}
                    disabled={loading}
                    text="Ingresar"
                    icon={
                      <Ionicons
                        name="game-controller-outline"
                        size={24}
                        color="black"
                      />
                    }
                  />
                </View>
              </View>
              <Footer />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  title: {
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "300",
    fontSize: 16,
    color: "#d1d1d1",
    letterSpacing: 4,
    marginTop: 6,
    marginBottom: 20,
  },
  input: {
    color: "#48EAE2",
    borderColor: "#48EAE2",
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 20,
    fontSize: 16,
    height: 50,
  },
  goBack: {
    position: "absolute",
    marginLeft: 20,
    marginTop: 20,
  },
});
