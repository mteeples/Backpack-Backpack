import { useContext } from "react";
import { COLORS } from "../theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "../routes";
import { AuthContext } from "../store/AuthContext";

import AdventureDetailScreen from "../screens/AdventureDetailScreen";
import AdventureListScreen from "../screens/AdventureListScreen";
import CharacterListScreen from "../screens/CharacterListScreen";
import CampaignListScreen from "../screens/CampaignListScreen";
import CharacterDetailTabs from "../screens/CharacterDetailTabs";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LogoutButton from "../components/LogoutButton";

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack = () => {
  const { isSignedIn } = useContext(AuthContext);
  console.log(isSignedIn);

  return (
    <Stack.Navigator
      initialRouteName={isSignedIn ? "CampaignList" : "SignIn"}
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.ballpointBlack },
        headerTintColor: COLORS.notebookWhite,
        // headerRight: () => <LogoutButton />
      }}
    >
      {isSignedIn ? (
        <>
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
        </>
      ) : (
        <>
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
        </>
      )}
    </Stack.Navigator>
  );
};

export default NavigationStack;
