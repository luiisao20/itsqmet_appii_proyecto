import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigator";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default MainNavigator;
