import { Text, Pressable, StyleSheet } from "react-native";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { FONT_SIZES, COLORS } from "../theme";

interface Props {
  title: string;
  isHost: boolean;
  onPress: () => void;
}

const CampaignItem = ({ title, isHost, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.text}>
        <MaterialDesignIcons
          name={isHost ? "crown" : "account"}
          size={FONT_SIZES.title}
          color={COLORS.ballpointBlue}
        />{" "}
        {title}
      </Text>
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

export default CampaignItem;
