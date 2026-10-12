import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { COLORS, SPACING } from "../theme";
import StickyModal from "./StickyModal";
import StickyInput from "./StickyInput";
import ScreenTitle from "./ScreenTitle";
import { joinCampaign } from "../repositories/StaticDataRepo";
import { CampaignOverview } from "../models/Models";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  setUserCampaigns: (campaigns: Array<CampaignOverview>) => void;
  userCampaigns: Array<CampaignOverview>;
}

const HostCampaignModal = ({
  visible,
  setVisible,
  setUserCampaigns,
  userCampaigns,
}: Props) => {
  const [campaignId, setCampaignId] = useState("");

  function handleCancel() {
    setVisible(false);
    setCampaignId("");
  }

  function handleJoin() {
    setUserCampaigns(joinCampaign({ campaignId, userCampaigns }));
    setVisible(false);
    setCampaignId("");
  }

  return (
    <StickyModal visible={visible} noteColor={COLORS.stickyYellow}>
      <ScreenTitle>Join Campaign</ScreenTitle>
      <View style={styles.textContainer}>
        <Text>Join an existing campaign</Text>
      </View>
      <StickyInput
        placeholder="Join Code"
        value={campaignId}
        onChangeText={setCampaignId}
        keyboardType="numeric"
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton
          title="Join"
          onPress={handleJoin}
          noteColor={COLORS.stickyYellow}
        />
        <PrimaryButton
          title="Cancel"
          onPress={handleCancel}
          noteColor={COLORS.stickyYellow}
        />
      </View>
    </StickyModal>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: SPACING.md,
    alignItems: "center",
  },
  buttonsContainer: {
    gap: SPACING.sm,
  },
});

export default HostCampaignModal;
