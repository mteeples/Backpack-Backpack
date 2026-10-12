import { View, StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import StickyNote from "../components/StickyNote";
import { COLORS, FONT_SIZES, SPACING } from "../theme";
import JoinCampaignModal from "../components/JoinCampaignModal";
import HostCampaignModal from "../components/HostCampaignModal";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { useState } from "react";
import {
  USER_CAMPAIGN_LINKS,
  UserCampaignLinkExpanded,
} from "../data/links/UserCampaignLinks";
import { CAMPAIGNS } from "../data/Campaigns";

interface Props {
  userId: string;
}

const STARTING_CAMPAIGNS: Array<UserCampaignLinkExpanded> =
  USER_CAMPAIGN_LINKS.map((user) => {
    return {
      ...user,
      campaign: CAMPAIGNS.find((campaign) => campaign.id === user.campaignId),
    };
  });

const CampaignListScreen = ({ userId }: Props) => {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [hostModalOpen, setHostModalOpen] = useState(false);

  const [userCampaigns, setUserCampaigns] = useState(
    STARTING_CAMPAIGNS.filter((user) => user.userId === userId),
  );

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
      <View style={styles.notesContainer}>
        <FlatList
          data={userCampaigns}
          keyExtractor={(campaign) => campaign.id}
          renderItem={({ item }) => (
            <StickyNote style={styles.note} noteColor={COLORS.stickyBeige}>
              <View style={styles.noteIcon}>
                <MaterialDesignIcons
                  name={item.isHost ? "crown" : "account"}
                  size={FONT_SIZES.title}
                />
              </View>
              <View style={styles.container}>
                <Text style={styles.noteText}>{item.campaign?.name}</Text>
              </View>
            </StickyNote>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.notebookWhite,
  },
  notesContainer: {
    flex: 1,
    paddingHorizontal: SPACING.md,
  },
  noteIcon: {
    padding: SPACING.sm,
  },
  note: {
    flexDirection: "row",
    alignItems: "center",
  },
  noteText: {
    fontSize: FONT_SIZES.body,
    backgroundColor: COLORS.stickyBeige,
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

export default CampaignListScreen;
