import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
  return <Text style={styles.versionText}>Version: 1.0.0</Text>;
};

export default Footer;

const styles = StyleSheet.create({
  versionText: {
    fontWeight: "300",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 16,
    color: "#ccccccad",
  },
});
