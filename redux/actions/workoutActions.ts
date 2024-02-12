import { AddWorkoutAction, RemoveWorkoutAction, UpdateWorkoutAction } from "../types";

export enum WORKOUT_LIST_ACTIONS_TYPES {
  ADD_WORKOUT ='WORKOUT_LIST_ADD_WORKOUT',
  REMOVE_WORKOUT = 'WORKOUT_LIST_REMOVE_WORKOUT',
  UPDATE_WORKOUT = 'WORKOUT_LIST_UPDATE_WORKOUT'
}

export const addWorkout = (payload: Workout): AddWorkoutAction => ({
  type: WORKOUT_LIST_ACTIONS_TYPES.ADD_WORKOUT,
  payload
}) 

export const removeWorkout = (payload: string): RemoveWorkoutAction => ({
  type: WORKOUT_LIST_ACTIONS_TYPES.ADD_WORKOUT,
  payload
}) 
export const updateWorkout = (payload: Workout): UpdateWorkoutAction => ({
  type: WORKOUT_LIST_ACTIONS_TYPES.ADD_WORKOUT,
  payload
}) 