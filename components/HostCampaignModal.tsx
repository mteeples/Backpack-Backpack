import { StyleSheet, View, Text } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { COLORS, SPACING } from "../theme";
import StickyModal from "./StickyModal";
import StickyInput from "./StickyInput";
import ScreenTitle from "./ScreenTitle";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const HostCampaignModal = ({ visible, setVisible }: Props) => {
  function handleCancel() {
    setVisible(false);
  }

  return (
    <StickyModal visible={visible} noteColor={COLORS.stickyYellow}>
      <ScreenTitle>Create Campaign</ScreenTitle>
      <View style={styles.textContainer}>
        <Text>Host a new campaign</Text>
      </View>
      <StickyInput placeholder="Campaign Title" />
      <StickyInput placeholder="Campaign Description" multiline={true} />
      <View style={styles.buttonsContainer}>
        <PrimaryButton title="Create" noteColor={COLORS.stickyYellow} />
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
