import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SPACING, FONT_SIZES } from "./theme";
import Card from "./components/Card";
import PrimaryButton from "./components/PrimaryButton";
import ScreenTitle from "./components/ScreenTitle";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.rootContainer}>
        <ScreenTitle>BackpackBackpack</ScreenTitle>
        <Card>
          <Text style={styles.bodyText}>
            Welcome to BackpackBackpack, the app for a rules-lite dungeoncrawl
            on the go!
          </Text>
        </Card>
        <View style={styles.buttonsContainer}>
          <PrimaryButton title="Host Game" />
          <PrimaryButton title="Join Game" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
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
