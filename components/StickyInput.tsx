import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { SPACING, COLORS } from "../theme";

interface StickyInputProps extends TextInputProps {
  label: string;
  isValid: boolean;
  errorMessage?: string;
}

const StickyInput = ({
  label,
  isValid,
  errorMessage,
  ...props
}: StickyInputProps) => {
  const showMultiline = "multiline" in props;
  return (
    <View>
      <Text style={[styles.text, isValid ? undefined : styles.error]}>
        {label}
        {!isValid && errorMessage && ` - ${errorMessage}`}
      </Text>
      <TextInput
        style={[
          styles.textInput,
          showMultiline ? styles.textMultiline : undefined,
        ]}
        {...props}
      />
    </View>
  );
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
  text: {
    marginBottom: SPACING.sm,
    color: COLORS.ballpointBlack,
  },
  textMultiline: {
    textAlignVertical: "top",
  },
  error: {
    color: COLORS.notebookRed,
  },
});

export default StickyInput;
