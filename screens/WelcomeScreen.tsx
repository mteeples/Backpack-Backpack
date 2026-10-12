import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StickyNote from "../components/StickyNote";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import { COLORS, SPACING, FONT_SIZES } from "../theme";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScreenTitle>Welcome, Adventurer</ScreenTitle>
      <StickyNote style={styles.note} noteColor={COLORS.stickyYellow}>
        <Text style={styles.bodyText}>
          Welcome to BackpackBackpack! Manage your TTRPG inventory with ease and
          journey forth. Just make sure you pack enough torches.
        </Text>
      </StickyNote>
      <View style={styles.buttonsContainer}>
        <PrimaryButton title="Login" />
        <PrimaryButton title="Sign Up" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    padding: SPACING.md,
    paddingTop: SPACING.lg,
    backgroundColor: COLORS.notebookWhite,
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
  note: {
    marginVertical: SPACING.lg,
  },
});

export default WelcomeScreen;
