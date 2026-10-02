import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, SPACING, SHADOW } from "../theme";

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
    ...SHADOW,
  },
});

export default Card;
