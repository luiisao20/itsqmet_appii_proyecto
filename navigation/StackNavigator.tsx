import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

export type RootStackParams = {
  welcome: undefined;
  login: undefined;
  register: undefined;
  Inicio: undefined;
}

const StackNavigation = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
