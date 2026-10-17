import { StyleSheet, Text, View } from "react-native";
import { COLORS, SPACING, FONT_SIZES } from "../theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import StickyNote from "../components/StickyNote";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import StickyInput from "../components/StickyInput";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const SignUpScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.rootContainer}>
      <StickyNote noteColor={COLORS.stickyYellow}>
        <ScreenTitle>Create Account</ScreenTitle>

        <StickyInput placeholder="Username" />
        <StickyInput
          placeholder="Password"
          textContentType="password"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <StickyInput
          placeholder="Confirm Password"
          textContentType="password"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            title="Create Account"
            noteColor={COLORS.stickyYellow}
            onPress={() => navigation.navigate("CampaignList", { userId: "1" })}
          />
          <Text style={styles.orText}>or</Text>
          <PrimaryButton
            title="Go to Login"
            noteColor={COLORS.stickyYellow}
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
      </StickyNote>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.notebookWhite,
    paddingTop: SPACING.lg * 3,
    paddingHorizontal: SPACING.lg,
  },
  buttonsContainer: {
    gap: SPACING.sm,
  },
  orText: {
    textAlign: "center",
    fontSize: FONT_SIZES.body,
  },
});

export default SignUpScreen;
