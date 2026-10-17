import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { COLORS, FONT_SIZES, SPACING } from "../theme";
import { getCampaigns } from "../repositories/Campaign";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import JoinCampaignModal from "../components/JoinCampaignModal";
import HostCampaignModal from "../components/HostCampaignModal";
import NotebookSheet from "../components/NotebookSheet";

type Props = NativeStackScreenProps<RootStackParamList, "CampaignList">;

const CampaignListScreen = () => {
  const userId = "1"; //TODO implement authentication

  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [hostModalOpen, setHostModalOpen] = useState(false);

  const [userCampaigns, setUserCampaigns] = useState(getCampaigns(userId));
  const campaignItems = userCampaigns.map((campaign) => (
    <Text>
      <MaterialDesignIcons name="crown" size={FONT_SIZES.title} />{" "}
      {campaign.name}
    </Text>
  ));
  const nbItems = [
    <ScreenTitle>My Campaigns</ScreenTitle>,
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
    </View>,

    ...campaignItems,
  ];

  return (
    <SafeAreaView style={styles.container}>
      <JoinCampaignModal
        visible={joinModalOpen}
        setVisible={setJoinModalOpen}
        userCampaigns={userCampaigns}
        setUserCampaigns={setUserCampaigns}
        userId={userId}
      />
      <HostCampaignModal
        visible={hostModalOpen}
        setVisible={setHostModalOpen}
        setUserCampaigns={setUserCampaigns}
        userCampaigns={userCampaigns}
        userId={userId}
      />
      <View style={styles.notesContainer}>
        <NotebookSheet data={nbItems} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.notebookWhite,
  },
  notesContainer: {
    flex: 1,
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
  },
});

export default CampaignListScreen;
