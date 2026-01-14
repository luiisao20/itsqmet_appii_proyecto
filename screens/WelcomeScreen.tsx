import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootStackParams } from "../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";

import { Colors } from "../assets/colors";
import HeaderDots from "../components/HeaderDots";
import ButtonComponent from "../components/ButtonComponent";
import Footer from "../components/Footer";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type Props = StackScreenProps<RootStackParams, "welcome">;

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View>
            <HeaderDots />
            <View style={styles.containerTitle}>
              <HeaderDots size={40} />
              <View style={{ alignItems: "center" }}>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Text style={styles.title}>MASTER</Text>
                  <Text style={[styles.title, { color: "#2FE6DE" }]}>MIND</Text>
                </View>
                <Text style={styles.subtitle}>Desafía tu lógica</Text>
              </View>
            </View>
            <View style={{ gap: 20 }}>
              <ButtonComponent
                onPress={() => navigation.navigate("login")}
                icon={<Entypo name="login" size={24} color="black" />}
                text="Iniciar Sesión"
              />
              <ButtonComponent
                onPress={() => navigation.navigate("register")}
                icon={<FontAwesome6 name="edit" size={20} color="white" />}
                text="Regístrate aquí"
                type="dark"
              />
            </View>
          </View>
          <Footer />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    display: "flex",
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
});
