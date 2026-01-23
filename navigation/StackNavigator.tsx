import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MyTabs from "./BottomNavigator";
import HowToPlayScreen from "../screens/HowToPlayScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";
import GameScreen from "../screens/GameScreen";
import PasswordScreen from "../screens/PasswordScreen";
import InfoScreen from "../screens/InfoScreen";
import HistoryScreen from "../screens/HistoryScreen";

export type RootStackParams = {
  welcome: undefined;
  login: undefined;
  register: undefined;
  tabs: undefined;
  howToPlay: undefined;
  leaderboard: undefined;
  game: undefined;
  password: undefined;
  info: undefined;
  history: undefined;
};

const StackNavigation = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator
      // initialRouteName="tabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="tabs" component={MyTabs} />
      <Stack.Screen name="howToPlay" component={HowToPlayScreen} />
      <Stack.Screen name="leaderboard" component={LeaderboardScreen} />
      <Stack.Screen name="game" component={GameScreen} />
      <Stack.Screen name="password" component={PasswordScreen} />
      <Stack.Screen name="info" component={InfoScreen} />
      <Stack.Screen name="history" component={HistoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
