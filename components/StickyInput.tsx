import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { SPACING, COLORS } from "../theme";

const StickyInput = ({ ...props }: TextInputProps) => {
  return <TextInput style={styles.textInput} {...props} />;
};

const styles = StyleSheet.create({
  textInput: {
    padding: SPACING.sm,
    borderColor: COLORS.ballpointBlack,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: SPACING.lg,
    fontSize: SPACING.md,
  },
});

export default StickyInput;
