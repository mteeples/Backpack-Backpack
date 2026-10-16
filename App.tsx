import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SPACING } from "./theme";
import CampaignListScreen from "./screens/CampaignListScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";

export default function App() {
  const pages = [
    <WelcomeScreen />,
    <SignInScreen />,
    <CampaignListScreen userId={"1"} />,
  ];
  const [pageIndex, setPageIndex] = useState(2);

  return <SafeAreaProvider>{pages[pageIndex]}</SafeAreaProvider>;
}

const styles = StyleSheet.create({
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: SPACING.md,
  },
});
