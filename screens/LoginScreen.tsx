import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootStackParams } from "../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";

import HeaderDots from "../components/HeaderDots";
import InputComponent from "../components/InputComponent";
import { Colors } from "../assets/colors";
import ButtonComponent from "../components/ButtonComponent";
import { loginAction } from "../core/auth/login.action";

import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import Footer from "../components/Footer";

type Props = StackScreenProps<RootStackParams, "login">;

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Ingresa información válida");
      setLoading(false);
      return;
    }

    try {
      await loginAction(email, password);
      navigation.replace("tabs");
    } catch (error) {
      Alert.alert("Error", "Credenciales invalidas");
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
                <Text style={styles.title}>Iniciar sesión</Text>
                <Text style={styles.subtitle}>El desafío empieza ahora...</Text>
                <View style={{ gap: 20 }}>
                  <InputComponent
                    icon={
                      <Entypo name="email" size={20} color={Colors.input} />
                    }
                    autoCapitalize="none"
                    placeholder="Correo electrónico"
                    inputMode="email"
                    onChangeText={setEmail}
                    value={email}
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
                    placeholder="Contraseña"
                    inputMode="text"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                  />
                  <ButtonComponent
                    disabled={loading}
                    onPress={handleLogin}
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

export default LoginScreen;

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
