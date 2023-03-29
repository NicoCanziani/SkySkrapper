import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/views/Home";
import LoginScreen from "./src/views/Login";
import UserProfile from "./src/views/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animationEnabled: false }}
      >
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="USER_PROFILE" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}