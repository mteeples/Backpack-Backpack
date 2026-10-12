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
      <StickyNote style={styles.note} noteColor={COLORS.stickyBeige}>
        <ScreenTitle>Sign In</ScreenTitle>

        <StickyInput placeholder="Campaign Title" />
        <StickyInput
          placeholder="Password"
          textContentType="password"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton title="Sign In" noteColor={COLORS.stickyBeige} />
          <Text style={styles.orText}>or</Text>
          <PrimaryButton
            title="Create Account"
            noteColor={COLORS.stickyBeige}
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
    justifyContent: "center",
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
