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
    const startingLevel = +inputs.startingLevel.value;

    // title cannot be empty
    // starting level between 1 and 10
    // description optional
    const titleIsValid = inputs.title.value !== "";
    const startingLevelIsValid =
      !isNaN(startingLevel) && startingLevel > 0 && startingLevel <= 10;

    // Set the isValid properties so the form can render any errors
    setInputs((curInputs) => ({
      ...curInputs,
      title: { value: curInputs.title.value, isValid: titleIsValid },
      startingLevel: {
        value: curInputs.startingLevel.value,
        isValid: startingLevelIsValid,
      },
    }));

    // Only submit if the inputs are valid
    if (titleIsValid && startingLevelIsValid) {
      const newCampaigns = hostGame(
        inputs.title.value,
        inputs.description.value,
        userId,
        userCampaigns,
      );
      setUserCampaigns(newCampaigns);
      handleCancel();
    }
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
        isValid={inputs.title.isValid}
        errorMessage="Cannot be empty"
        value={inputs.title.value}
        onChangeText={(text) => handleTextChange("title", text)}
      />
      <StickyInput
        label="Starting Level"
        isValid={inputs.startingLevel.isValid}
        errorMessage="Must be between 1 & 10"
        value={inputs.startingLevel.value}
        onChangeText={(text) => handleTextChange("startingLevel", text)}
        keyboardType="number-pad"
      />
      <StickyInput
        label="Description"
        isValid={inputs.description.isValid}
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
