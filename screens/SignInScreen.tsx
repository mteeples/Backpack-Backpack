import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SPACING, FONT_SIZES } from "../theme";

import StickyModal from "../components/StickyModal";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import StickyInput from "../components/StickyInput";
import NotebookSheet from "../components/NotebookSheet";

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <StickyModal visible={true} noteColor={COLORS.stickyYellow}>
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
      </StickyModal>
      <NotebookSheet />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  buttonsContainer: {
    gap: SPACING.sm,
  },
  orText: {
    textAlign: "center",
    fontSize: FONT_SIZES.body,
  },
});

export default SignInScreen;
