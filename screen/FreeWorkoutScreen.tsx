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
import { calculateDifferenceBetweenTimes } from '../utils/timeUtils';

type Props = {
  navigation: NavigationProp<WorkoutStackParamList>;
  workout: Workout;
  setWorkout: React.Dispatch<React.SetStateAction<Workout>>
  exerciseRowFunctions: {
    handleAddSet: (exerciseId: string) => void
    handleUpdateSet: (exerciseId: string, value: Sets) => void
  }
};

const FreeWorkoutScreen = ({ navigation, workout, setWorkout, exerciseRowFunctions }: Props) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyles(theme)
  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(calculateDifferenceBetweenTimes(workout.startTime, new Date()));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

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
                    <Text style={{ color: theme.palette.tertiary.main }}> : {calculateDifferenceBetweenTimes(workout.startTime, new Date())}</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'center', gap: 5 }}>
                  <I18nText style={styles.infoTitle} text={texts.sets} />
                  <View style={styles.infoGroup}>
                    <AntDesignIcon name="retweet" size={24} color={theme.palette.tertiary.main} />
                    <Text style={{ color: theme.palette.tertiary.main }}> : {workout.exercises.reduce((accumulator, currentExercise) => accumulator + currentExercise.sets.length, 0)}</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'center', gap: 5 }}>
                  <I18nText style={styles.infoTitle} text={texts.volume} />
                  <View style={styles.infoGroup}>
                    <FontAwesome5Icon name="weight-hanging" size={24} color={theme.palette.tertiary.main} />
                    <Text style={{ color: theme.palette.tertiary.main }}> : {0}</Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
          <FlatList
            data={[...workout.exercises]}
            style={{ width: '100%', height: '100%', flex: 1, paddingHorizontal: 10, paddingTop: 12 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <ExerciseRow exerciseRow={item} onAddSet={exerciseRowFunctions.handleAddSet} onUpdateSet={exerciseRowFunctions.handleUpdateSet} />}
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