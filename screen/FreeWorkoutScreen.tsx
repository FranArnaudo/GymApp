import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { NavigationProp } from "@react-navigation/native";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../components/basicComponents/Background";
import Card from "../components/basicComponents/Card";
import React, { SetStateAction, useContext, useEffect, useId, useState } from 'react';
import Button from '../components/basicComponents/Button';
import { ThemeContext } from '../contexts/ThemeContext';
import { ExercisesContext, WorkoutStackParamList } from '../navigators/WorkoutNavigator/WorkoutNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/basicComponents/Header/Header';
import { texts } from '../translations/translations';
import I18nText from '../components/basicComponents/I18nText/I18nText';
import ExerciseRow from '../components/basicComponents/ExerciseRow/ExerciseRow';
import { generateUUID } from '../utils/uuid';

type Props = {
  navigation: NavigationProp<WorkoutStackParamList>;
  workout: Workout;
  setWorkout: React.Dispatch<React.SetStateAction<Workout>>
  exerciseRowFunctions: {
    handleSelectSet: (exerciseId: string, setId: string) => void
    handleAddSet: (exerciseId: string) => void
  }
};

const FreeWorkoutScreen = ({ navigation, workout, setWorkout, exerciseRowFunctions }: Props) => {
  const { theme } = useContext(ThemeContext)
  const { exercises, setExercises } = useContext<{ exercises?: Exercise[], setExercises?: React.Dispatch<React.SetStateAction<Exercise[]>> }>(ExercisesContext)
  const styles = useStyles(theme)


  useEffect(() => {
    console.log(workout)
  }, [workout])
  const [sets, setSets] = useState<number>(0)
  const [totalVolumen, setTotalVolume] = useState<number>(200)
  const handleNavigateToExercisesScreen = () => {
    navigation.navigate<'ExercisesScreen'>('ExercisesScreen')
  }
  return (
    <Background>
      <SafeAreaView style={{ width: '100%', flex: 1 }}>
        <Header title={texts.freeWorkout} />
        <View style={{
          flex: 1, justifyContent: 'space-between', width: '100%',
          paddingHorizontal: 20,
        }}>

          <View style={styles.container}>
            <Card>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <View style={{ alignItems: 'center', gap: 5 }}>
                  <I18nText style={styles.infoTitle} text={texts.time} />
                  <View style={styles.infoGroup}>
                    <AntDesignIcon name='clockcircleo' size={24} color={theme.palette.tertiary.main} />
                    <Text style={{ color: theme.palette.tertiary.main }}> : 00:00</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'center', gap: 5 }}>
                  <I18nText style={styles.infoTitle} text={texts.sets} />
                  <View style={styles.infoGroup}>
                    <AntDesignIcon name="retweet" size={24} color={theme.palette.tertiary.main} />
                    <Text style={{ color: theme.palette.tertiary.main }}> : {sets}</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'center', gap: 5 }}>
                  <I18nText style={styles.infoTitle} text={texts.volume} />
                  <View style={styles.infoGroup}>
                    <FontAwesome5Icon name="weight-hanging" size={24} color={theme.palette.tertiary.main} />
                    <Text style={{ color: theme.palette.tertiary.main }}> : {totalVolumen}</Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
          <FlatList
            data={[...workout.exercises]}
            style={{ width: '100%', height: '100%', flex: 1, paddingHorizontal: 10, paddingTop: 12 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <ExerciseRow exerciseRow={item} onSelectRow={exerciseRowFunctions.handleSelectSet} onAddSet={exerciseRowFunctions.handleAddSet} />}
          />
          <View style={{ width: '100%', gap: 10, alignSelf: 'flex-end' }}>
            <Button text={texts.addExercise} onPress={handleNavigateToExercisesScreen} />
          </View>
        </View>


      </SafeAreaView>
    </Background>
  );
}
const useStyles = (theme: Theme) => StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    height: 120,
    width: '100%'
  },
  infoGroup: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  infoTitle: {
    textTransform: 'uppercase',
    fontWeight: '600',
    color: theme.palette.tertiary.main
  },
  infoSecondaryText: {
    textTransform: 'capitalize',
    color: theme.palette.tertiary.main
  }
})
export default FreeWorkoutScreen;