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

type FormKey = "title" | "startingLevel" | "description";

const HostCampaignModal = ({
  visible,
  setVisible,
  setUserCampaigns,
  userCampaigns,
  userId,
}: Props) => {
  const [inputs, setInputs] = useState({
    title: { value: "", isValid: true },
    startingLevel: { value: "", isValid: true },
    description: { value: "", isValid: true },
  });

  function handleTextChange(key: FormKey, val: string) {
    setInputs((curInputs) => ({
      ...curInputs,
      [key]: { value: val, isValid: curInputs[key].isValid },
    }));
  }

  function handleHost() {
    const newCampaigns = hostGame(
      inputs.title.value,
      inputs.description.value,
      userId,
      userCampaigns,
    );
    setUserCampaigns(newCampaigns);
    handleCancel();
  }

  function handleCancel() {
    setVisible(false);
    setInputs({
      title: { value: "", isValid: true },
      startingLevel: { value: "", isValid: true },
      description: { value: "", isValid: true },
    });
  }

  return (
    <StickyModal visible={visible} noteColor={COLORS.stickyYellow}>
      <ScreenTitle>Create Campaign</ScreenTitle>
      <StickyInput
        label="Title"
        value={inputs.title.value}
        onChangeText={(text) => handleTextChange("title", text)}
      />
      <StickyInput
        label="Starting Level"
        value={inputs.startingLevel.value}
        onChangeText={(text) => handleTextChange("startingLevel", text)}
        keyboardType="number-pad"
      />
      <StickyInput
        label="Description"
        multiline={true}
        value={inputs.description.value}
        onChangeText={(text) => handleTextChange("description", text)}
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
  buttonsContainer: {
    gap: SPACING.sm,
  },
});

export default HostCampaignModal;
