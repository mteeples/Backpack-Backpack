import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS, FONT_SIZES } from "../theme";

interface Props {
  text: string;
  highlightColor?: string;
  onPress?: () => void;
}

const NotebookButton = ({ text, onPress, highlightColor }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={[styles.text, { backgroundColor: highlightColor }]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.ballpointBlack,
    fontWeight: "bold",
    fontSize: FONT_SIZES.body,
  },
  button: {
    flexDirection: "row",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default NotebookButton;
