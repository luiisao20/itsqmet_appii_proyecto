import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors } from "../assets/colors";

interface Props extends TextInputProps {
  icon?: React.JSX.Element;
}

const InputComponent = ({ icon, ...rest }: Props) => {
  return (
    <View style={styles.input}>
      {icon}
      <TextInput
        {...rest}
        style={{ fontSize: 20, height: 60, color: Colors.input, width: "100%" }}
        placeholderTextColor={Colors.input}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.input,
    borderWidth: 1,
    borderRadius: 12,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingLeft: 10,
  },
});
