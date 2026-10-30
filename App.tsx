import { useContext } from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./routes";
import { AuthContextProvider, AuthContext } from "./store/AuthContext";

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
  const { isSignedIn } = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerStyle: { backgroundColor: COLORS.ballpointBlack },
            headerTintColor: COLORS.notebookWhite,
            // headerRight: () => <LogoutButton />
          }}
        >
          {isSignedIn ? (
            <Stack.Group>
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={({ navigation }) => ({
                  title: "Sign In",
                })}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                  title: "Create Account",
                }}
              />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen
                name="AdventureDetail"
                component={AdventureDetailScreen}
                options={({ navigation }) => ({
                  headerRight: () => <LogoutButton />,
                })}
              />
              <Stack.Screen
                name="AdventureList"
                component={AdventureListScreen}
                options={({ navigation }) => ({
                  headerRight: () => <LogoutButton />,
                })}
              />
              <Stack.Screen
                name="CharacterList"
                component={CharacterListScreen}
                options={({ navigation }) => ({
                  headerRight: () => <LogoutButton />,
                })}
              />
              <Stack.Screen
                name="CampaignList"
                component={CampaignListScreen}
                options={({ navigation }) => ({
                  headerRight: () => <LogoutButton />,
                  title: "My Campaigns",
                })}
              />
              <Stack.Screen
                name="CharacterDetail"
                component={CharacterDetailTabs}
                options={({ navigation }) => ({
                  headerRight: () => <LogoutButton />,
                })}
              />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.notebookWhite,
  },
});
