import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useUser } from "../contexts/UserContext";
import HomeScreen from "../views/Home";
import LoginScreen from "../views/Login";

const Stack = createNativeStackNavigator();
export function Router() {
  const user = useUser();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user.current == null ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Login" }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
