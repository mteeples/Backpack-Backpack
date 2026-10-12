import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SPACING, FONT_SIZES } from "../theme";
import StickyNote from "../components/StickyNote";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import StickyInput from "../components/StickyInput";

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <StickyNote style={styles.note} noteColor={COLORS.stickyYellow}>
        <ScreenTitle>Sign In</ScreenTitle>

        <StickyInput placeholder="Campaign Title" />
        <StickyInput
          placeholder="Password"
          textContentType="password"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton title="Sign In" noteColor={COLORS.stickyYellow} />
          <Text style={styles.orText}>or</Text>
          <PrimaryButton
            title="Create Account"
            noteColor={COLORS.stickyYellow}
          />
        </View>
      </StickyNote>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
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
    gap: SPACING.sm,
  },
  note: {
    marginVertical: SPACING.lg,
  },
  orText: {
    textAlign: "center",
    fontSize: FONT_SIZES.body,
  },
});

export default SignInScreen;
