import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLORS, SPACING } from "../theme";
import PrimaryButton from "./PrimaryButton";
import StickyModal from "./StickyModal";
import StickyInput from "./StickyInput";
import ScreenTitle from "./ScreenTitle";
import { Campaign } from "../models/Campaign";
import { hostGame } from "../repositories/Campaign";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  setUserCampaigns: (campaigns: Array<Campaign>) => void;
  userCampaigns: Array<Campaign>;
  userId: string;
}

const HostCampaignModal = ({
  visible,
  setVisible,
  setUserCampaigns,
  userCampaigns,
  userId,
}: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleHost() {
    const newCampaigns = hostGame(title, description, userId, userCampaigns);
    setUserCampaigns(newCampaigns);
    handleCancel();
  }

  function handleCancel() {
    setVisible(false);
    setTitle("");
    setDescription("");
  }

  return (
    <StickyModal visible={visible} noteColor={COLORS.stickyYellow}>
      <ScreenTitle>Create Campaign</ScreenTitle>
      <View style={styles.textContainer}>
        <Text>Host a new campaign</Text>
      </View>
      <StickyInput
        placeholder="Campaign Title"
        value={title}
        onChangeText={setTitle}
      />
      <StickyInput
        placeholder="Campaign Description"
        multiline={true}
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton
          title="Create"
          noteColor={COLORS.stickyYellow}
          onPress={handleHost}
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
