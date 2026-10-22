import { StyleSheet } from "react-native";
import { COLORS } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./routes";

import AdventureDetailScreen from "./screens/AdventureDetailScreen";
import AdventureListScreen from "./screens/AdventureListScreen";
import CharacterListScreen from "./screens/CharacterListScreen";
import CampaignListScreen from "./screens/CampaignListScreen";
import CharacterDetailTabs from "./screens/CharacterDetailTabs";
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
          name="AdventureList"
          component={AdventureListScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <LogoutButton onPress={() => navigation.navigate("SignIn")} />
            ),
          })}
        />
        <Stack.Screen
          name="CharacterList"
          component={CharacterListScreen}
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
            title: "My Campaigns",
          })}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetailTabs}
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
            title: "Sign In",
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerLeft: () => undefined,
            title: "Create Account",
          }}
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
