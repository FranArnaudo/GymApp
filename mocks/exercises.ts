import { Classification, MuscleGroup } from "../enums";

export const MOCK_EXERCISES: Exercise[] = [
  {
    name:{en:'Bench press',es:'Press banca'},
    musclesWorkedByIntensity: {
      0: MuscleGroup.Chest,
      1: MuscleGroup.Shoulders,
      2: MuscleGroup.Triceps
    },
    classification: Classification.Freeweight
  },
  {
    name: {en:'Lat pull-down', es:'Jalón al pecho' },
    musclesWorkedByIntensity: {
      0: MuscleGroup.Lats,
      1: MuscleGroup.UpperBack,
      2: MuscleGroup.Forearms
    },
    classification: Classification.Cable
  },
  {
    name:{en:'Inclined leg-press', es:'Prensa inclinada'},
    musclesWorkedByIntensity: {
      0: MuscleGroup.Quadriceps,
      1: MuscleGroup.Hamstrings,
      2: MuscleGroup.Glutes
    },
    classification: Classification.Machine
  }
]

// const exercise = {
//   name: 
// }
