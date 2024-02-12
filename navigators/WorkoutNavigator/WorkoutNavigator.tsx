import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FreeWorkoutView from '../../screen/FreeWorkoutScreen';
import ExercisesScreen from '../../screen/ExercisesScreen';
import { generateUUID } from '../../utils/uuid';

export type WorkoutStackParamList = {
  FreeWorkoutView: undefined;
  ExercisesScreen: undefined
};

const Stack = createNativeStackNavigator<WorkoutStackParamList>();
export const ExercisesContext = React.createContext<{ exercises?: Exercise[], setExercises?: React.Dispatch<React.SetStateAction<Exercise[]>> }>({ exercises: [] })
function WorkoutNavigator() {
  const [workout, setWorkout] = React.useState<Workout>({ exercises: [], startTime: new Date() })

  const handleAddExerciseRow = (exercise: Exercise) => {
    const currentWorkout = workout
    currentWorkout.exercises.push({
      id: generateUUID(),
      exercise,
      sets: [{
        id: generateUUID(),
        selected: false,
        last: '-',
        reps: 0,
        weight: 0,
        rir: 0
      }]
    })
    setWorkout({ ...currentWorkout })
  }
  const handleAddSet = (exerciseId: string) => {
    let currentWorkout = workout
    const rowIndex = currentWorkout.exercises.findIndex((ex) => ex.id === exerciseId)
    currentWorkout.exercises[rowIndex].sets.push({
      id: generateUUID(),
      selected: false,
      last: '-',
      reps: 0,
      weight: 0,
      rir: 0
    })
    setWorkout({ ...currentWorkout })
  }
  const handleUpdateSet = (exerciseId: string, value: Sets) => {
    const currentWorkout = workout
    const rowIndex = currentWorkout.exercises.findIndex((ex) => ex.id === exerciseId)
    currentWorkout.exercises[rowIndex].sets = currentWorkout.exercises[rowIndex].sets.map(set => (
      set.id === value.id ? value : set))
    setWorkout({ ...currentWorkout })
  }
  const exerciseRowFunctions = {
    handleAddSet,
    handleUpdateSet
  }
  const [exercises, setExercises] = React.useState<Exercise[]>([])
  return (
    <ExercisesContext.Provider value={{ exercises, setExercises }}>
      <Stack.Navigator initialRouteName='FreeWorkoutView' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FreeWorkoutView" >
          {(props) => <FreeWorkoutView {...props} workout={workout} setWorkout={setWorkout} exerciseRowFunctions={exerciseRowFunctions} />}
        </Stack.Screen>
        <Stack.Screen name="ExercisesScreen"  >
          {(props) => <ExercisesScreen {...props} handleAddExerciseRow={handleAddExerciseRow} />}
        </Stack.Screen>
      </Stack.Navigator>
    </ExercisesContext.Provider>
  );
}

export default WorkoutNavigator;