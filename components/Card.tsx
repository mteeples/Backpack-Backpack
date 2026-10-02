import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, SPACING } from "../theme";

interface Props {
  children?: ReactNode;
}

const Card = ({ children }: Props) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.muted,
    borderRadius: 12,
    padding: SPACING.md,
    marginVertical: SPACING.md,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});

export default Card;
