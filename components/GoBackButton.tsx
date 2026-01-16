import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../assets/colors";

interface Props extends TouchableOpacityProps {}

const GoBackButton = ({ ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.goBack} {...rest}>
      <Feather name="arrow-left-circle" size={36} color={Colors.buttonLight} />
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  goBack: {
    position: "absolute",
    marginLeft: 20,
    marginTop: 20,
    zIndex: 10
  },
});
