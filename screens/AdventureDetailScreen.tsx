import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { COLORS, FONT_SIZES, SPACING } from "../theme";
import ScreenTitle from "../components/ScreenTitle";
import NotebookSheet from "../components/NotebookSheet";
import NotebookButton from "../components/NotebookButton";
import { getCharacter } from "../repositories/Character";
import { getAdventure } from "../repositories/Adventure";
import { useLayoutEffect } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "AdventureDetail">;

const CharacterInventoryScreen = ({ navigation, route }: Props) => {
  const { adventureId } = route.params;
  const adventure = getAdventure(adventureId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: adventure?.name });
  }, [adventure]);

  const nbItems = [
    <View style={styles.buttonsContainer}>
      <NotebookButton text="New Area" highlightColor={COLORS.highlighterPink} />
    </View>,
    <ScreenTitle></ScreenTitle>,
    <ScreenTitle>{adventure?.name}</ScreenTitle>,
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
