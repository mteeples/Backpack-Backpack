import { Text, Pressable, StyleSheet } from "react-native";
import { FONT_SIZES, COLORS } from "../theme";

interface Props {
  title: string;
  onPress: () => void;
}

const CharacterItem = ({ title, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.ballpointBlue,
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

export default CharacterItem;
