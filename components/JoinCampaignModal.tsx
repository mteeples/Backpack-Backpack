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
      <ScreenTitle>Join Campaign</ScreenTitle>
      <View style={styles.textContainer}>
        <Text>Join an existing campaign</Text>
      </View>
      <StickyInput placeholder="Join Code" />
      <View style={styles.buttonsContainer}>
        <PrimaryButton title="Join" />
        <PrimaryButton title="Cancel" onPress={handleCancel} />
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
