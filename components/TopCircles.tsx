import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { Colors } from "../assets/colors";

interface Props {
  alignSelf: "flex-start" | "center" | "flex-end";
  top?: number;
  height?: number;
  width?: number;
  color: string;
  user: string;
  rank: number;
  score: number;
  photoUrl?: string;
}

const TopCircles = ({
  alignSelf,
  top,
  height,
  width,
  color,
  user,
  rank,
  score,
  photoUrl,
}: Props) => {
  return (
    <>
      <View
        style={[
          styles.container,
          {
            alignSelf,
            top: top ?? 35,
          },
        ]}
      >
        <View
          style={[
            styles.circle,
            {
              height: height ?? 100,
              width: width ?? 100,
              borderColor: color,
              shadowColor: color,
            },
          ]}
        >
          <Image
            source={{
              uri:
                photoUrl ??
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            }}
            style={{
              height: height ?? 100,
              width: width ?? 100,
              alignSelf: "center",
            }}
          />
        </View>
        <View
          style={[
            styles.containerPosition,
            {
              backgroundColor: color,
              top: (height ?? 100) - 15,
            },
          ]}
        >
          <Text style={styles.titlePosition}>#{rank}</Text>
        </View>
      </View>
      <View
        style={[
          {
            alignSelf,
            top: (top ?? 35) + (height ?? 100) + 15,
            width: width ?? 100,
            flexDirection: "column",
          },
        ]}
      >
        <Text style={styles.title}>{user}</Text>
        <Text style={[styles.title, { top: 18, fontSize: 12, color: color }]}>
          {score} pts
        </Text>
      </View>
    </>
  );
};

export default TopCircles;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  circle: {
    backgroundColor: Colors.background,
    borderWidth: 3,
    borderRadius: 9999,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 8,
    overflow: "hidden",
  },
  title: {
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
  },
  containerPosition: {
    position: "absolute",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  titlePosition: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});
