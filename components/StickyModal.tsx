import { ReactNode } from "react";
import {
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
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
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StickyNote style={styles.note} noteColor={noteColor}>
          {children}
        </StickyNote>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    justifyContent: "center",
    backgroundColor: COLORS.modalBackground,
  },
  innerContainer: {
    flex: 1,
  },
  note: {
    marginBottom: SPACING.lg * 3,
  },
});

export default StickyModal;
