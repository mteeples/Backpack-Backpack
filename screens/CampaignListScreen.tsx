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
import NotebookButton from "../components/NotebookButton";
import CampaignItem from "../components/CampaignItem";

type Props = NativeStackScreenProps<RootStackParamList, "CampaignList">;

const CampaignListScreen = ({ navigation, route }: Props) => {
  const { userId } = route.params;

  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [hostModalOpen, setHostModalOpen] = useState(false);

  const [userCampaigns, setUserCampaigns] = useState(getCampaigns(userId));
  const campaignItems = userCampaigns.map((campaign) => {
    const isHost = campaign.userIsHost(userId);
    const destination = isHost ? "AdventureList" : "CharacterList";

    return (
      <CampaignItem
        title={campaign.name}
        isHost={isHost}
        onPress={() =>
          navigation.navigate(destination, {
            campaignId: campaign.id,
            userId,
          })
        }
      />
    );
  });
  const nbItems = [
    <View style={styles.buttonsContainer}>
      <NotebookButton
        text="Host"
        highlightColor={COLORS.highlighterYellow}
        onPress={() => setHostModalOpen(true)}
      />
    </View>,
    <View style={styles.buttonsContainer}>
      <NotebookButton
        text="Join"
        highlightColor={COLORS.highlighterYellow}
        onPress={() => setJoinModalOpen(true)}
      />
    </View>,
    <ScreenTitle></ScreenTitle>,
    <ScreenTitle>My Campaigns</ScreenTitle>,
    <ScreenTitle></ScreenTitle>,

    ...campaignItems,
  ];

  return (
    <View style={styles.container}>
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
    </View>
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
    justifyContent: "flex-end",
    marginHorizontal: SPACING.lg,
    gap: SPACING.md,
  },
});

export default CampaignListScreen;
