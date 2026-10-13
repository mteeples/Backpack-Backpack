import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import StickyNote from "../components/StickyNote";
import { COLORS, FONT_SIZES, SPACING } from "../theme";
import JoinCampaignModal from "../components/JoinCampaignModal";
import HostCampaignModal from "../components/HostCampaignModal";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { Campaign } from "../models/Campaign";
import { getCampaigns } from "../repositories/Campaign";

interface Props {
  userId: string;
}

const CampaignListScreen = ({ userId }: Props) => {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [hostModalOpen, setHostModalOpen] = useState(false);

  const startingCampaigns = getCampaigns(userId);
  const [userCampaigns, setUserCampaigns] = useState(startingCampaigns);

  return (
    <SafeAreaView style={styles.container}>
      <JoinCampaignModal
        visible={joinModalOpen}
        setVisible={setJoinModalOpen}
        userCampaigns={userCampaigns}
        setUserCampaigns={setUserCampaigns}
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
          renderItem={({ item }) => (
            <StickyNote style={styles.note} noteColor={COLORS.stickyBeige}>
              <View style={styles.noteIcon}>
                <MaterialDesignIcons
                  name={item.userIsHost(userId) ? "crown" : "account"}
                  size={FONT_SIZES.title}
                />
              </View>
              <View style={styles.container}>
                <Text style={styles.noteText}>{item.name}</Text>
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
