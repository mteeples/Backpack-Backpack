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
  noteColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const PrimaryButton = ({ title, onPress, style, noteColor }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [styles.pressed, styles.button, style]
          : [styles.button, style]
      }
    >
      <Text style={[styles.text, { color: noteColor || COLORS.notebookWhite }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.ballpointBlack,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: 12,
    ...SHADOW,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    fontSize: FONT_SIZES.body,
    textAlign: "center",
  },
});

export default PrimaryButton;
