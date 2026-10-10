import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";
import ScreenTitle from "../../components/ScreenTitle";
import { COLORS, SPACING, FONT_SIZES } from "../../theme";

const NoCampaignsView = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScreenTitle>Welcome, Adventurer</ScreenTitle>
      <Card style={styles.card}>
        <Text style={styles.bodyText}>
          Welcome to BackpackBackpack! Manage your TTRPG inventory with ease and
          journey forth. Just make sure you pack enough torches.
        </Text>
      </Card>
      <View style={styles.buttonsContainer}>
        <PrimaryButton title="Host Game" />
        <PrimaryButton title="Join Game" />
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
  card: {
    marginVertical: SPACING.lg,
  },
});

export default NoCampaignsView;
