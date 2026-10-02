import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SPACING, FONT_SIZES } from "./theme";
import Card from "./components/Card";
import PrimaryButton from "./components/PrimaryButton";
import ScreenTitle from "./components/ScreenTitle";

export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("./assets/images/pexels-jorge-acre-239933086-17061995.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <SafeAreaView style={styles.rootContainer}>
          <ScreenTitle>Welcome, Adventurer</ScreenTitle>
          <Card>
            <Text style={styles.bodyText}>
              Welcome to BackpackBackpack! Manage your TTRPG inventory with ease
              and journey forth. Just make sure you pack enough torches.
            </Text>
          </Card>
          <View style={styles.buttonsContainer}>
            <PrimaryButton title="Host Game" />
            <PrimaryButton title="Join Game" />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    padding: SPACING.md,
    paddingTop: SPACING.lg,
  },
  bodyText: {
    color: COLORS.text,
    fontSize: FONT_SIZES.body,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: SPACING.md,
  },
});
