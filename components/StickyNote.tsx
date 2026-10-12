import { View, StyleSheet, ViewProps } from "react-native";
import { COLORS, SPACING, SHADOW } from "../theme";

interface Props extends ViewProps {
  noteColor: string;
}

const StickyNote = ({ children, style, noteColor }: Props) => {
  return (
    <View style={[styles.note, style, { backgroundColor: noteColor }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    borderRadius: 12,
    padding: SPACING.md,
    marginVertical: SPACING.sm,
    ...SHADOW,
  },
});

export default StickyNote;
