import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

export type RootBottomTabParams = {
  home: undefined;
  profile: undefined;
};

function MyTabs() {
  const Tab = createBottomTabNavigator<RootBottomTabParams>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1C3041" },
        tabBarActiveTintColor: "#2fe6ddde",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home-filled"
              size={24}
              color={focused ? "#2fe6ddd5" : "#fff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="person"
              size={24}
              color={focused ? "#2fe6ddd5" : "#fff"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
