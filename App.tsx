import { SafeAreaProvider } from "react-native-safe-area-context";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <WelcomeScreen />
    </SafeAreaProvider>
  );
}
