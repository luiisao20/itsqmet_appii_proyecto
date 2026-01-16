import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../assets/colors";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface Props {
  touch?: boolean;
  second?: boolean;
  result?: boolean;
}

export const TutorialDots = ({ touch, second }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        backgroundColor: "#ffffff0a",
        padding: 10,
        borderRadius: 20,
        borderColor: "#ffffff33",
        borderWidth: 1,
        position: "relative",
      }}
    >
      {touch && (
        <>
          {second && <Text style={styles.textNumber}>2</Text>}
          <MaterialIcons
            name="touch-app"
            size={30}
            color="white"
            style={{
              position: "absolute",
              left: second ? 60 : 15,
              zIndex: 100,
              top: 20,
            }}
          />
        </>
      )}
      <View
        style={[
          styles.headerCircles,
          { borderColor: Colors.dotRedHigh, backgroundColor: Colors.dotRedLow },
        ]}
      ></View>
      <View
        style={[
          styles.headerCircles,
          {
            borderColor: Colors.dotBlueHigh,
            backgroundColor: Colors.dotBlueLow,
          },
        ]}
      ></View>
      <View
        style={[
          styles.headerCircles,
          {
            borderColor: Colors.dotYellowHigh,
            backgroundColor: Colors.dotYellowLow,
          },
        ]}
      ></View>
      <View
        style={[
          styles.headerCircles,
          {
            borderColor: Colors.dotGreenHigh,
            backgroundColor: Colors.dotGreenLow,
          },
        ]}
      ></View>
      <View
        style={[
          styles.headerCircles,
          {
            borderColor: "gray",
            backgroundColor: "white",
          },
        ]}
      ></View>
      <View
        style={[
          styles.headerCircles,
          {
            borderColor: Colors.dotOrangeHigh,
            backgroundColor: Colors.dotOrangeLow,
          },
        ]}
      ></View>
    </View>
  );
};

export const TryDots = ({ touch, result }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff0a",
        padding: 10,
        paddingRight: 20,
        borderRadius: 20,
        borderColor: "#ffffff33",
        borderWidth: 1,
      }}
    >
      {touch && <Text style={styles.textNumber}>1</Text>}
      <FourDotsButton result={result} />
      <View style={{ flexDirection: "row", gap: 15, position: "relative" }}>
        {touch && (
          <MaterialIcons
            name="touch-app"
            size={30}
            color="white"
            style={{ position: "absolute", left: 5, zIndex: 100, top: 10 }}
          />
        )}
        <View
          style={[
            styles.headerCircles,
            {
              borderColor: Colors.dotRedHigh,
              backgroundColor: Colors.dotRedLow,
            },
          ]}
        ></View>
        <View
          style={
            result
              ? [
                  styles.headerCircles,
                  {
                    borderColor: "gray",
                    backgroundColor: "white",
                  },
                ]
              : styles.emptyCircle
          }
        ></View>
        <View
          style={
            result
              ? [
                  styles.headerCircles,
                  {
                    borderColor: Colors.dotOrangeHigh,
                    backgroundColor: Colors.dotOrangeLow,
                  },
                ]
              : styles.emptyCircle
          }
        ></View>
        <View
          style={
            result
              ? [
                  styles.headerCircles,
                  {
                    borderColor: Colors.dotBlueHigh,
                    backgroundColor: Colors.dotBlueLow,
                  },
                ]
              : styles.emptyCircle
          }
        ></View>
      </View>
    </View>
  );
};

export const FourDotsButton = ({ result }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.row}>
          <View style={[styles.dot, { backgroundColor: "#3C455D" }]} />
          <View
            style={[
              styles.dot,
              { backgroundColor: result ? "red" : "#3C455D" },
            ]}
          />
        </View>

        <View style={styles.row}>
          <View
            style={[
              styles.dot,
              { backgroundColor: result ? "white" : "#3C455D" },
            ]}
          />
          <View
            style={[
              styles.dot,
              { backgroundColor: result ? "white" : "#3C455D" },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerCircles: {
    borderRadius: 9999,
    shadowRadius: 8,
    width: 36,
    height: 36,
    borderWidth: 3,
  },
  emptyCircle: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: "#ffffff0a",
    borderColor: "#8890a4",
    borderWidth: 8,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderColor: "#C1C7D7",
    borderWidth: 1,
    width: 50,
    height: 50,
  },
  inner: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 8,
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    borderRadius: 8,
    width: 8,
    height: 8,
  },
  textNumber: {
    color: Colors.buttonLight,
    fontSize: 20,
    position: "absolute",
    left: 10,
    top: -15,
  },
});
