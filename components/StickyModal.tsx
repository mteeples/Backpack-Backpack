import { ReactNode } from "react";
import { Modal, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SPACING } from "../theme";
import StickyNote from "./StickyNote";

interface Props {
  visible: boolean;
  children?: ReactNode;
  noteColor: string;
}

const StickyModal = ({ visible, children, noteColor }: Props) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <SafeAreaView style={styles.container}>
        <StickyNote style={styles.note} noteColor={noteColor}>
          {children}
        </StickyNote>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    justifyContent: "flex-start",
    backgroundColor: COLORS.modalBackground,
  },
  note: {
    marginTop: SPACING.lg,
  },
});

export default StickyModal;
