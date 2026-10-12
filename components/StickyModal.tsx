import { ReactNode } from "react";
import { Modal, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SPACING } from "../theme";
import Card from "./Card";

interface Props {
  visible: boolean;
  children?: ReactNode;
}

const StickyModal = ({ visible, children }: Props) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <SafeAreaView style={styles.container}>
        <Card style={styles.card}>{children}</Card>
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
});

export default StickyModal;
