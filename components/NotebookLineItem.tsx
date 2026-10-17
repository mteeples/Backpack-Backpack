import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "../theme";

interface Props {
  children?: ReactNode;
}

const NotebookLineItem = ({ children }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}></View>
      <View style={styles.rightContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    height: FONT_SIZES.title + 2 * SPACING.sm,
  },
  leftContainer: {
    width: "15%",
    borderRightColor: COLORS.notebookRed,
    borderRightWidth: 3,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.notebookBlue,
  },
  rightContainer: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.notebookBlue,
    justifyContent: "flex-end",
    paddingLeft: SPACING.sm,
  },
});

export default NotebookLineItem;
