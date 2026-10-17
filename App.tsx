import { StyleSheet } from "react-native";
import { COLORS } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./routes";

import AdventureDetailScreen from "./screens/AdventureDetailScreen";
import CampaignDetailScreen from "./screens/CampaignDetailScreen";
import CampaignListScreen from "./screens/CampaignListScreen";
import CharacterInventoryScreen from "./screens/CharacterInventoryScreen";
import CharacterStatsScreen from "./screens/CharacterStatsScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LogoutButton from "./components/LogoutButton";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.ballpointBlack },
          headerTintColor: COLORS.notebookWhite,
        }}
      >
        <Stack.Screen
          name="AdventureDetail"
          component={AdventureDetailScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <LogoutButton onPress={() => navigation.navigate("SignIn")} />
            ),
          })}
        />
        <Stack.Screen
          name="CampaignDetail"
          component={CampaignDetailScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <LogoutButton onPress={() => navigation.navigate("SignIn")} />
            ),
          })}
        />
        <Stack.Screen
          name="CampaignList"
          component={CampaignListScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <LogoutButton onPress={() => navigation.navigate("SignIn")} />
            ),
          })}
        />
        <Stack.Screen
          name="CharacterInventory"
          component={CharacterInventoryScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <LogoutButton onPress={() => navigation.navigate("SignIn")} />
            ),
          })}
        />
        <Stack.Screen
          name="CharacterStats"
          component={CharacterStatsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <LogoutButton onPress={() => navigation.navigate("SignIn")} />
            ),
          })}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={({ navigation }) => ({
            headerLeft: () => null,
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerLeft: () => undefined }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.notebookWhite,
  },
});
