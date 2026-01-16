import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../assets/colors";
import HeaderDots from "../components/HeaderDots";
import {
  FourDotsButton,
  TryDots,
  TutorialDots,
} from "../components/TutorialDots";
import Footer from "../components/Footer";

export default function HowToPlayScreen() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.containerTitle}>
            <HeaderDots size={40} />
            <View style={{ alignItems: "center" }}>
              <View
                style={{ alignItems: "center", flexDirection: "row", gap: 4 }}
              >
                <Text style={styles.title}>CÓMO</Text>
                <Text style={[styles.title, { color: "#2FE6DE" }]}>JUGAR</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Text style={styles.subtitle}>Objetivo</Text>
            <Text style={styles.paragraph}>
              El objetivo del juego es adivinar el código en el menor número de
              intentos posibles
            </Text>
            <Text style={styles.paragraph}>
              Existen 6 colores entre los que puedes escoger
            </Text>
            <TutorialDots />
            <Text style={styles.paragraph}>
              Tu meta es adivinar el código aleatorio de colores en la secuencia
              correcta
            </Text>
            <Text style={styles.paragraph}>Tienes 10 intentos</Text>
            <Text style={styles.subtitle}>Pasos</Text>
            <Text style={styles.paragraph}>
              Toca el color que quieras colorcar en el código
            </Text>
            <TryDots />
            <TutorialDots touch />
            <Text style={styles.paragraph}>
              Si quieres borrar un color e insertar otro en su lugar, toca el
              color y seguido escoge un color disponible del tablero
            </Text>
            <TryDots touch />
            <TutorialDots touch second />
            <Text style={styles.paragraph}>
              Cuando estés seguro de tu combinación, toca el botón de OK
            </Text>
            <Text style={styles.subtitle}>Resultados</Text>
            <Text style={styles.paragraph}>
              Cuando hayas confirmado tu combinación, checa los círculos
              pequeños al costado izquierdo de tu intento
            </Text>
            <TryDots result />
            <Text style={styles.paragraph}>
              Rojo - El color es correcto y está bien posicionado
            </Text>
            <Text style={styles.paragraph}>
              Blanco - Existe un color correcto PERO está mal posicionado
            </Text>
            <Text style={styles.paragraph}>Vacío - Color incorrecto</Text>
            <Text style={styles.paragraph}>
              El orden de los colores en el resultado no está relacionado con el
              orden del intento que realizaste, el resultado sólo te indica
              cuántos colores acertaste y si existe alguno en una posición
              correcta
            </Text>
            <Text style={[styles.paragraph, {marginBottom: 20}]}>
              Si no logras resolver el código en el número de intentos
              permitidos, al final se revelará cuál era el código secreto
            </Text>
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  containerTitle: {
    backgroundColor: "#ffffff0a",
    marginTop: 30,
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
    fontWeight: "500",
    fontSize: 24,
    color: "#d1d1d1",
    letterSpacing: 2,
    marginTop: 6,
    textAlign: "center",
  },
  paragraph: {
    fontWeight: "300",
    fontSize: 14,
    color: Colors.buttonLight,
    letterSpacing: 2,
    textAlign: "center",
  },
});
