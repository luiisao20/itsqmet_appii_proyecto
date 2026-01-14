import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
