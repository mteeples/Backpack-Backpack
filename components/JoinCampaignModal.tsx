import { StyleSheet, View, TextInput, Text } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { COLORS, SPACING } from "../theme";
import StickyModal from "./StickyModal";
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
    <StickyModal visible={visible}>
      <ScreenTitle>Join Campaign</ScreenTitle>
      <View style={styles.textContainer}>
        <Text>Join an existing campaign</Text>
      </View>
      <TextInput placeholder="Join Code" style={styles.textInput} />
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
  textInput: {
    padding: SPACING.sm,
    borderColor: COLORS.primary,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: SPACING.lg,
    fontSize: SPACING.md,
  },
  buttonsContainer: {
    gap: SPACING.sm,
  },
});

export default HostCampaignModal;
