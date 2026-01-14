import { StyleSheet, View } from "react-native";
import { Colors } from "../assets/colors";

interface Props {
  size?: number;
}

const HeaderDots = ({ size = 12 }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 6,
        paddingTop: 12,
        justifyContent: "center",
      }}
    >
      <View
        style={[
          styles.headerCircles,
          {
            backgroundColor: Colors.red,
            shadowColor: Colors.red,
            width: size,
            height: size,
          },
        ]}
      ></View>
      <View
        style={[
          styles.headerCircles,
          {
            backgroundColor: Colors.blue,
            shadowColor: Colors.blue,
            width: size,
            height: size,
          },
        ]}
      ></View>
      <View
        style={[
          styles.headerCircles,
          {
            backgroundColor: Colors.yellow,
            shadowColor: Colors.blue,
            width: size,
            height: size,
          },
        ]}
      ></View>
      <View
        style={[
          styles.headerCircles,
          {
            backgroundColor: Colors.green,
            shadowColor: Colors.blue,
            width: size,
            height: size,
          },
        ]}
      ></View>
    </View>
  );
};

export default HeaderDots;

const styles = StyleSheet.create({
  headerCircles: {
    borderRadius: 9999,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
});
