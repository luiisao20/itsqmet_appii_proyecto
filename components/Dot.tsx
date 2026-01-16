import { StyleSheet, View } from "react-native";

interface Props {
  size: number;
  color: string;
  select?: boolean;
  shadow: boolean;
  borderColor?: string;
  borderStyle?: "dotted" | "solid";
}

const Dot = ({
  size,
  color,
  select,
  shadow,
  borderColor,
  borderStyle = "solid",
}: Props) => {
  return (
    <View
      style={[
        styles.headerCircles,
        shadow ? styles.shadowContainer : undefined,
        {
          backgroundColor: color,
          shadowColor: shadow ? color : undefined,
          width: size,
          height: size,
          borderColor: select ? borderColor || "white" : undefined,
          borderWidth: select ? 3 : 0,
          borderStyle: borderStyle,
        },
      ]}
    ></View>
  );
};

export default Dot;

const styles = StyleSheet.create({
  headerCircles: {
    borderRadius: 9999,
  },
  shadowContainer: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
});
