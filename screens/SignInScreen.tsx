import { StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import { COLORS, SPACING, FONT_SIZES } from "../theme";

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Card style={styles.card}>
        <ScreenTitle>Sign In</ScreenTitle>

        <TextInput placeholder="Campaign Title" style={styles.textInput} />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          textContentType="password"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton title="Sign In" />
          <Text style={styles.orText}>or</Text>
          <PrimaryButton title="Create Account" />
        </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: SPACING.md,
    paddingTop: SPACING.lg,
  },
  bodyText: {
    color: COLORS.text,
    fontSize: FONT_SIZES.body,
    textAlign: "center",
  },
  buttonsContainer: {
    gap: SPACING.sm,
  },
  textInput: {
    padding: SPACING.sm,
    borderColor: COLORS.primary,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: SPACING.lg,
    fontSize: SPACING.md,
  },
  card: {
    marginVertical: SPACING.lg,
  },
  orText: {
    textAlign: "center",
    fontSize: FONT_SIZES.body,
  },
});

export default SignInScreen;
