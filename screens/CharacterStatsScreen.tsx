import { useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { COLORS, FONT_SIZES, SPACING } from "../theme";
import ScreenTitle from "../components/ScreenTitle";
import NotebookSheet from "../components/NotebookSheet";
import NotebookButton from "../components/NotebookButton";
import CharacterItem from "../components/CharacterItem";
import { getCampaign } from "../repositories/Campaign";
import { getCharacter, getCharacters } from "../repositories/Character";

type Props = NativeStackScreenProps<RootStackParamList, "CharacterStats">;

const CharacterStatsScreen = ({ navigation, route }: Props) => {
  const { characterId } = route.params;
  const character = getCharacter(characterId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: character?.name,
    });
  }, [character]);

  const nbItems = [
    <View style={styles.buttonsContainer}>
      <NotebookButton
        text="Inventory"
        highlightColor={COLORS.highlighterBlue}
        onPress={() =>
          navigation.navigate("CharacterInventory", { characterId })
        }
      />
    </View>,
    <ScreenTitle></ScreenTitle>,
    <ScreenTitle>{character?.name}</ScreenTitle>,
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

export default CharacterStatsScreen;
