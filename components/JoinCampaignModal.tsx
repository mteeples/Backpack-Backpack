import { Modal, StyleSheet, View, TextInput, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./Card";
import PrimaryButton from "./PrimaryButton";
import { COLORS, SPACING } from "../theme";
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
    <Modal visible={visible} animationType="slide" transparent={true}>
      <SafeAreaView style={styles.container}>
        <Card style={styles.card}>
          <ScreenTitle>Join Campaign</ScreenTitle>
          <View style={styles.textContainer}>
            <Text>Join an existing campaign</Text>
          </View>
          <TextInput placeholder="Join Code" style={styles.textInput} />
          <View style={styles.buttonsContainer}>
            <PrimaryButton title="Join" />
            <PrimaryButton title="Cancel" onPress={handleCancel} />
          </View>
        </Card>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    justifyContent: "flex-start",
    backgroundColor: "rgba(15, 36, 57, 0.8)",
  },
  card: {
    marginTop: SPACING.lg,
  },
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
