import { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SPACING } from "./theme";
import CampaignListScreen from "./screens/CampaignListScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import PrimaryButton from "./components/PrimaryButton";

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
        style={{ flex: 1 }}
        source={require("./assets/images/pexels-834934396-20818871.jpg")}
        resizeMode="cover"
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
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: SPACING.md,
  },
});
