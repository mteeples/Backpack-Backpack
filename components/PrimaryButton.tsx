import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { COLORS, SPACING, FONT_SIZES } from "../theme";

interface Props {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const PrimaryButton = ({ title, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed ? [styles.pressed, styles.button] : styles.button
      }
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: COLORS.text,
    fontSize: FONT_SIZES.body,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PrimaryButton;
