import { StyleSheet } from "react-native";
import { COLORS } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./routes";
import { AuthContextProvider } from "./store/AuthContext";
import NavigationStack from "./components/NavigationStack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.notebookWhite,
  },
});
