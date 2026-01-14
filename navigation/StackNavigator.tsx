import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MyTabs from "./BottomNavigator";

export type RootStackParams = {
  welcome: undefined;
  login: undefined;
  register: undefined;
  tabs: undefined;
};

const StackNavigation = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="tabs" component={MyTabs} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
