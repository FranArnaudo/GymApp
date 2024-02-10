import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../../contexts/ThemeContext";
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import I18nText from "../I18nText/I18nText";
import { texts } from "../../../translations/translations";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button";
import LineTextInput from "../LineTextInput/LineTextInput";

type ExerciseRowProp = {
  exerciseRow: WorkoutExerciseRow
  onSelectRow: (exerciseId: string, setId: string) => void
  onAddSet: (exerciseId: string) => void
}
type DataColumnProps = {
  title: I18nAble,
  value: string | number
}

const ExerciseRow = ({ exerciseRow, onSelectRow, onAddSet }: ExerciseRowProp) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyles(theme)
  const handleSelectSet = (setId: string) => {
    onSelectRow(exerciseRow.id, setId)
  }
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <I18nText text={exerciseRow?.exercise.name} style={styles.exerciseTitle} />
          <I18nText text={{ en: `(${exerciseRow.sets.length} sets)`, es: `(${exerciseRow.sets.length} sets)` }} style={styles.setsCountTitle} />
        </View>
        <I18nText text={texts.addNotes} style={styles.addNotesText} />
      </View>
      {exerciseRow?.sets.map((set, i) =>
        <View style={[styles.dataRow, i % 2 ? styles.evenRow : styles.oddRow, set.selected && styles.selectedRow]}>
          <DataColumn title={texts.last} value={0} />
          <DataColumn title={texts.reps} value={0} />
          <DataColumn title={texts.weight} value={0} />
          <DataColumn title={texts.rir} value={0} />
          <Checkbox onPress={() => handleSelectSet(set.id)} />
        </View>
      )}
      <Button text={texts.addSet} stuck="top" iconPlacement="pre" Icon={<AntDesignIcon size={20} name="pluscircleo" color={theme.palette.tertiary.main} />} variant="secondary" onPress={() => onAddSet(exerciseRow.id)} />
    </View>
  );
}


const DataColumn = ({ title, value }: DataColumnProps) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyles(theme)
  return (
    <View style={styles.dataColumnContainer}>
      <I18nText text={title} style={styles.addNotesText} />
      <LineTextInput placeholder={String(value)} keyboardType='number-pad' />
    </View>
  )
};
const useStyles = (theme: Theme) => StyleSheet.create({
  container: {
    width: '100%',
    borderTopColor: theme.type === 'dark' ? theme.palette.neutral.A100 : theme.palette.neutral[900],
    borderTopWidth: 1,
    paddingVertical: 12
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  setsCountTitle: {
    textAlignVertical: 'bottom',
    ...theme.typography.h6,
    color: theme.palette.neutral[500],
  },
  exerciseTitle: {
    ...theme.typography.h4,
    color: theme.palette.tertiary.main
  },
  addNotesText: {
    ...theme.typography.body2,
    color: theme.palette.neutral[500]
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  evenRow: {
    backgroundColor: theme.palette.primary.light,
  },
  oddRow: {
    backgroundColor: theme.palette.primary.main,
  },
  selectedRow: {
    backgroundColor: theme.palette.success.main
  },
  dataColumnContainer: {
    alignItems: 'center'
  },
  dataColumnValue: {
    ...theme.typography.body2,
    color: theme.type === 'dark' ? theme.palette.neutral.A100 : theme.palette.neutral[900],
  }
})
export default ExerciseRow;