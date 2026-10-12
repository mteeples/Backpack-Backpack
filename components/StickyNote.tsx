import { ReactNode } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { COLORS, SPACING, SHADOW } from "../theme";

interface Props {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Card = ({ children, style }: Props) => {
  return <View style={[styles.note, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  note: {
    backgroundColor: COLORS.muted,
    borderRadius: 12,
    padding: SPACING.md,
    marginVertical: SPACING.sm,
    ...SHADOW,
  },
});

export default Card;
