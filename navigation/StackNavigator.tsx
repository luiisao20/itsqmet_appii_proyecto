import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MyTabs from "./BottomNavigator";
import HowToPlayScreen from "../screens/HowToPlayScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";
import GameScreen from "../screens/GameScreen";

export type RootStackParams = {
  welcome: undefined;
  login: undefined;
  register: undefined;
  tabs: undefined;
  howToPlay: undefined;
  leaderboard: undefined;
  game: undefined;
};

const StackNavigation = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="tabs" component={MyTabs} />
      <Stack.Screen name="howToPlay" component={HowToPlayScreen} />
      <Stack.Screen name="leaderboard" component={LeaderboardScreen} />
      <Stack.Screen name="game" component={GameScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
