import { View, StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/PrimaryButton";
import ScreenTitle from "../../components/ScreenTitle";
import Card from "../../components/Card";
import { UserCampaignLinkExpanded } from "../../data/links/UserCampaignLinks";
import { SPACING } from "../../theme";
import JoinCampaignModal from "../../components/JoinCampaignModal";
import HostCampaignModal from "../../components/HostCampaignModal";
import { useState } from "react";

interface Props {
  campaigns: Array<UserCampaignLinkExpanded>;
  setCampaigns: (campaigns: Array<UserCampaignLinkExpanded>) => void;
}

const CampaignsView = ({ campaigns }: Props) => {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [hostModalOpen, setHostModalOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <JoinCampaignModal
        visible={joinModalOpen}
        setVisible={setJoinModalOpen}
      />
      <HostCampaignModal
        visible={hostModalOpen}
        setVisible={setHostModalOpen}
      />
      <ScreenTitle>My Campaigns</ScreenTitle>
      <View style={styles.buttonsContainer}>
        <PrimaryButton
          title="Host"
          style={styles.button}
          onPress={() => setHostModalOpen(true)}
        />
        <PrimaryButton
          title="Join"
          style={styles.button}
          onPress={() => setJoinModalOpen(true)}
        />
      </View>
      <View style={styles.cardsContainer}>
        <FlatList
          data={campaigns}
          keyExtractor={(campaign) => campaign.id}
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
    paddingHorizontal: SPACING.lg,
  },
});

export default CampaignsView;
