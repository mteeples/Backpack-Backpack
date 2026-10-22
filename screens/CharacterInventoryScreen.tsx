import { View, StyleSheet } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CharacterDetailParams } from "../routes";
import { COLORS, FONT_SIZES, SPACING } from "../theme";
import ScreenTitle from "../components/ScreenTitle";
import NotebookSheet from "../components/NotebookSheet";
import NotebookButton from "../components/NotebookButton";
import { getCharacter } from "../repositories/Character";

type Props = BottomTabScreenProps<CharacterDetailParams, "Inventory">;

const CharacterInventoryScreen = ({ navigation, route }: Props) => {
  const { characterId } = route.params;
  const character = getCharacter(characterId);

  const nbItems = [
    <View style={styles.buttonsContainer}>
      <NotebookButton
        text="Stats"
        highlightColor={COLORS.highlighterBlue}
        onPress={() => navigation.navigate("Stats", { characterId })}
      />
    </View>,
    <ScreenTitle></ScreenTitle>,
    <ScreenTitle>{character?.name}'s Stuff</ScreenTitle>,
    <ScreenTitle></ScreenTitle>,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.notesContainer}>
        <NotebookSheet data={nbItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.notebookWhite,
  },
  notesContainer: {
    flex: 1,
  },
  noteIcon: {
    padding: SPACING.sm,
  },
  note: {
    flexDirection: "row",
    alignItems: "center",
  },
  noteText: {
    fontSize: FONT_SIZES.body,
    backgroundColor: COLORS.stickyBeige,
  },
  button: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: SPACING.lg,
    gap: SPACING.md,
  },
});

export default CharacterInventoryScreen;
