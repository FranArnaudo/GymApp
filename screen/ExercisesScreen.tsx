import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { MOCK_EXERCISES } from "../mocks/exercises";
import Card from "../components/basicComponents/Card";
import Background from "../components/basicComponents/Background";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import benchpress from '../assets/images/benchpress.jpg'
import { NavigationProp, RouteProp, useRoute } from "@react-navigation/native";
import { ExercisesContext, WorkoutStackParamList } from "../navigators/WorkoutNavigator/WorkoutNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/basicComponents/Header/Header";
import { texts } from "../translations/translations";
import I18nText from "../components/basicComponents/I18nText/I18nText";
type renderItemProps = {
  item: Exercise
}
type Props = {
  navigation: NavigationProp<WorkoutStackParamList>;
  handleAddExerciseRow: (exercise: Exercise) => void
};
const ExercisesScreen = ({ navigation, handleAddExerciseRow }: Props) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyles(theme)
  const { exercises, setExercises } = useContext<{ exercises?: Exercise[], setExercises?: React.Dispatch<React.SetStateAction<Exercise[]>> }>(ExercisesContext)

  const handleAddExercise = (exercise: Exercise) => {
    handleAddExerciseRow(exercise)
    navigation.reset({
      index: 0,
      routes: [{ name: 'FreeWorkoutView' }],
    })

  }
  return (
    <Background>
      <SafeAreaView style={{ width: '100%', flex: 1 }}>
        <Header title={texts.exercises} />
        <FlatList style={{ width: '100%', paddingHorizontal: 20 }} data={MOCK_EXERCISES} renderItem={({ item }: renderItemProps) => (
          <View>
            <TouchableOpacity onPress={() => { handleAddExercise(item) }} >
              <View style={styles.exerciseContainer}>
                <Image style={styles.image} source={benchpress}></Image>
                <View style={styles.infoContainer}>
                  <I18nText style={styles.name} text={item.name} />
                  <Text style={styles.classification}>{item.classification}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.divider}></View>
          </View>
        )}>
        </FlatList>
      </SafeAreaView>
    </Background>
  );
}
const useStyles = (theme: Theme) => StyleSheet.create({
  image: {
    borderRadius: 100,
    aspectRatio: 1,
    width: 70,
    height: 70
  },
  exerciseContainer: {
    width: '100%',
    // backgroundColor: palette.primary.light,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    paddingVertical: 10
  },
  name: {
    fontSize: 16,
    color: theme.palette.tertiary.light
  },
  infoContainer: {
    justifyContent: 'center'
  },
  classification: {
    fontSize: 12,
    color: theme.palette.tertiary.light
  },
  divider: {
    height: 0.5,
    width: '100%',
    backgroundColor: theme.palette.neutral?.[500]
  }
})
export default ExercisesScreen;