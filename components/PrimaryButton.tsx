import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import { COLORS, SPACING, FONT_SIZES, SHADOW } from "../theme";

interface Props {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const PrimaryButton = ({ title, onPress, style }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [styles.pressed, styles.button, style]
          : [styles.button, style]
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
    ...SHADOW,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: COLORS.background,
    fontSize: FONT_SIZES.body,
    textAlign: "center",
  },
});

export default PrimaryButton;
