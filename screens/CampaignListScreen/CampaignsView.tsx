import { View, StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/PrimaryButton";
import ScreenTitle from "../../components/ScreenTitle";
import Card from "../../components/Card";
import { UserCampaignLinkExpanded } from "../../data/links/UserCampaignLinks";
import { COLORS, SPACING } from "../../theme";

interface Props {
  campaigns: Array<UserCampaignLinkExpanded>;
}

const CampaignsView = ({ campaigns }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle>My Campaigns</ScreenTitle>
      <View style={styles.buttonsContainer}>
        <PrimaryButton title="Host" style={styles.button} />
        <PrimaryButton title="Join" style={styles.button} />
      </View>
      <View style={styles.cardsContainer}>
        <FlatList
          data={campaigns}
          keyExtractor={(campaign) => campaign.id.toString()}
          renderItem={({ item }) => (
            <Card>
              <Text>{item.campaign?.name}</Text>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  cardsContainer: {
    flex: 1,
    paddingHorizontal: SPACING.md,
  },
  button: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: SPACING.md,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
    paddingHorizontal: SPACING.md,
  },
});

export default CampaignsView;
