//Workout Types
export type WorkoutListState = Workout[]

export type AddWorkoutAction = {
  type: string,
  payload: Workout
}

export type RemoveWorkoutAction = {
  type: string,
  payload: string
}

export type UpdateWorkoutAction = {
  type: string,
  payload: Workout
}

export type WorkoutListAction = AddWorkoutAction | RemoveWorkoutAction | UpdateWorkoutAction

//State types
export type AppState = {
  workoutList: (state: WorkoutListState[] | undefined, action: WorkoutListAction) => WorkoutListState[]
}