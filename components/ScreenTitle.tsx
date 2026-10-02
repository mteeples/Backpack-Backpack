import { Text, StyleSheet } from "react-native";
import { ReactNode } from "react";
import { COLORS, SPACING, FONT_SIZES } from "../theme";

interface Props {
  children?: ReactNode;
}

const ScreenTitle = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: FONT_SIZES.title,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: SPACING.sm,
    textAlign: "center",
  },
});

export default ScreenTitle;
