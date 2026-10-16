import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SPACING, FONT_SIZES } from "../theme";

import StickyNote from "../components/StickyNote";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import NotebookSheet from "../components/NotebookSheet";
import StickyModal from "../components/StickyModal";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <StickyModal visible={true} noteColor={COLORS.stickyYellow}>
        <ScreenTitle>Welcome, Adventurer</ScreenTitle>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>
            Welcome to BackpackBackpack! Manage your TTRPG inventory with ease
            and journey forth. Just make sure you pack enough torches.
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <PrimaryButton title="Login" noteColor={COLORS.stickyYellow} />
          <PrimaryButton title="Sign Up" noteColor={COLORS.stickyYellow} />
        </View>
      </StickyModal>
      <NotebookSheet />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
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
