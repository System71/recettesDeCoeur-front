import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./containers/ProfileScreen";
import HomeScreen from "./containers/HomeScreen";
import MyRecipesScreen from "./containers/MyRecipesScreen";
import { AntDesign } from "@expo/vector-icons";
import Header from "./components/Header";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.main}>
      <Stack.Navigator>
        <Stack.Screen name="tab" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Tab.Screen
                name="TabHome"
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name={"home"} size={size} color={color} />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator
                    screenOptions={{
                      headerTitle: () => <Header />,
                      headerTitleAlign: "center",
                    }}
                  >
                    <Stack.Screen name="home">
                      {() => <HomeScreen />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
              <Tab.Screen
                name="TabProfile"
                options={{
                  tabBarLabel: "Mon Profil",
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name={"user"} size={size} color={color} />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator
                    screenOptions={{
                      headerTitle: () => <Header />,
                      headerTitleAlign: "center",
                    }}
                  >
                    <Stack.Screen name="profile">
                      {() => <ProfileScreen />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
              <Tab.Screen
                name="TabRecipes"
                options={{
                  tabBarLabel: "Mes Recettes",
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name={"hearto"} size={size} color={color} />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator
                    screenOptions={{
                      headerTitle: () => <Header />,
                      headerTitleAlign: "center",
                    }}
                  >
                    <Stack.Screen name="home">
                      {() => <MyRecipesScreen />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
