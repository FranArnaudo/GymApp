import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../../contexts/ThemeContext";
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import I18nText from "../I18nText/I18nText";
import { texts } from "../../../translations/translations";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button";
import LineTextInput from "../LineTextInput/LineTextInput";
import { debounce } from 'lodash'

type ExerciseRowProp = {
  exerciseRow: WorkoutExerciseRow
  onAddSet: (exerciseId: string) => void
  onUpdateSet: (exerciseId: string, value: Sets) => void
}
type DataRowProps = {
  set: Sets,
  isCurrent: boolean,
  setAsCurrent: () => void,
  isEven: boolean
  onUpdateSet: (value: Sets) => void
}
type DataColumnProps = {
  title: I18nAble,
  value: string | number,
  isCurrent: boolean
  setAsCurrent: () => void,
  onChange: (value: number) => void,
  readOnly?: boolean
}

const ExerciseRow = ({ exerciseRow, onAddSet, onUpdateSet }: ExerciseRowProp) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyles(theme)
  const [currentSetId, setCurrentSetID] = useState<string>(exerciseRow.sets[0].id)
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
        <DataRow onUpdateSet={(value: Sets) => onUpdateSet(exerciseRow.id, value)} set={set} isEven={Boolean(i % 2)} isCurrent={set.id === currentSetId} setAsCurrent={() => setCurrentSetID(set.id)} />
      )}
      <Button text={texts.addSet} stuck="top" iconPlacement="pre" Icon={<AntDesignIcon size={20} name="pluscircleo" color={theme.palette.tertiary.main} />} variant="secondary" onPress={() => onAddSet(exerciseRow.id)} />
    </View>
  );
}

const DataRow = ({ set, isCurrent, setAsCurrent, isEven, onUpdateSet }: DataRowProps) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyles(theme)
  const [value, setValue] = useState(set)
  const handleUpdate = (key: keyof Sets, val: number | boolean) => {
    setValue((prev) => ({ ...prev, [key]: val }))
  }
  useEffect(() => {
    if (Object.values(value).splice(3, 3).every(val => Boolean(val)) || set.selected !== value.selected) {
      onUpdateSet(value)
    }
  }, [value])
  return (
    <View style={[styles.dataRow, isEven ? styles.evenRow : styles.oddRow, set.selected && styles.selectedRow,]} >
      <DataColumn title={texts.last} isCurrent={isCurrent} value={value.last} setAsCurrent={setAsCurrent} readOnly onChange={() => { }} />
      <DataColumn title={texts.reps} isCurrent={isCurrent} value={value.reps} setAsCurrent={setAsCurrent} onChange={(value: number) => handleUpdate('reps', value)} />
      <DataColumn title={texts.weight} isCurrent={isCurrent} value={value.weight} setAsCurrent={setAsCurrent} onChange={(value: number) => handleUpdate('weight', value)} />
      <DataColumn title={texts.rir} isCurrent={isCurrent} value={value.rir} setAsCurrent={setAsCurrent} onChange={(value: number) => handleUpdate('rir', value)} />
      <Checkbox onPress={() => handleUpdate('selected', !set.selected)} />
    </View>
  )
}

const DataColumn = ({ title, value, isCurrent, setAsCurrent, onChange, readOnly }: DataColumnProps) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyles(theme)
  return (
    <View style={styles.dataColumnContainer}>
      <I18nText text={title} style={[styles.addNotesText, isCurrent && styles.dataColumnCurrent]} />
      <LineTextInput placeholder={String(value)} onChangeText={(e) => onChange(Number(e))} readOnly={readOnly} keyboardType={typeof value === 'number' ? 'number-pad' : 'default'} onFocus={setAsCurrent} />
    </View>
  )
};
const useStyles = (theme: Theme) => StyleSheet.create({
  container: {
    width: '100%',
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
  },
  dataColumnCurrent: {
    color: theme.type === 'dark' ? theme.palette.neutral.A100 : theme.palette.neutral[900],
    fontWeight: 'bold'
  }
})
export default ExerciseRow;