import { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CampaignListScreen from "./screens/CampaignListScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import PrimaryButton from "./components/PrimaryButton";
import { SPACING } from "./theme";

export default function App() {
  const pages = [
    <WelcomeScreen />,
    <SignInScreen />,
    <CampaignListScreen userId={"1"} />,
  ];
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("./assets/images/pexels-jorge-acre-239933086-17061995.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        {pages[pageIndex]}
        <View style={styles.navButtons}>
          <PrimaryButton title="Welcome" onPress={() => setPageIndex(0)} />
          <PrimaryButton title="Sign In" onPress={() => setPageIndex(1)} />
          <PrimaryButton
            title="Campaign List"
            onPress={() => setPageIndex(2)}
          />
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: SPACING.md,
  },
});
