import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../assets/colors";

interface Props extends PressableProps {
  icon: React.JSX.Element;
  notArrow?: boolean;
  text: string;
  type?: "light" | "dark";
}

const ButtonComponent = ({
  icon,
  notArrow,
  text,
  type = "light",
  ...rest
}: Props) => {
  return (
    <Pressable
      {...rest}
      style={({ pressed }) => [
        styles.loginButton,
        {
          backgroundColor:
            type === "light" ? Colors.buttonLight : Colors.buttonDark,
        },
        pressed && { opacity: 0.75 },
      ]}
    >
      <View style={{ flexDirection: "row", gap: 8 }}>
        {icon}
        <Text
          style={{
            fontWeight: "700",
            fontSize: 18,
            color: type === "dark" ? "white" : "black",
          }}
        >
          {text}
        </Text>
      </View>
      {!notArrow && (
        <MaterialIcons
          name="chevron-right"
          size={24}
          color={type === 'light' ? Colors.darkGreen : 'white'}
        />
      )}
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  loginButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 40,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderColor: "#ffffff33",
    borderWidth: 1,
    borderRadius: 12,
  },
});
