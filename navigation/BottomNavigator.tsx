import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1C3041" },
        tabBarActiveTintColor: "#2fe6ddde",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Inicio"
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
        name="Perfil"
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
