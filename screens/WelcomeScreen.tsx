import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StickyNote from "../components/StickyNote";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import { COLORS, SPACING, FONT_SIZES } from "../theme";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <StickyNote style={styles.note} noteColor={COLORS.stickyBeige}>
        <ScreenTitle>Welcome, Adventurer</ScreenTitle>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>
            Welcome to BackpackBackpack! Manage your TTRPG inventory with ease
            and journey forth. Just make sure you pack enough torches.
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <PrimaryButton title="Login" noteColor={COLORS.stickyBeige} />
          <PrimaryButton title="Sign Up" noteColor={COLORS.stickyBeige} />
        </View>
      </StickyNote>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    padding: SPACING.md,
    paddingTop: SPACING.lg,
    // backgroundColor: COLORS.modalBackground,
    justifyContent: "center",
  },
  bodyContainer: {
    marginTop: SPACING.sm,
    marginBottom: SPACING.lg,
  },
  bodyText: {
    color: COLORS.ballpointBlack,
    fontSize: FONT_SIZES.body,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: SPACING.sm,
  },
  note: {
    marginVertical: SPACING.lg,
  },
});

export default WelcomeScreen;
