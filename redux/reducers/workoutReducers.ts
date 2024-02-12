import { WORKOUT_LIST_ACTIONS_TYPES } from "../actions/workoutActions"
import { WorkoutListAction, WorkoutListState } from "../types"

const initialState: WorkoutListState[] = []

export const workoutList = (state: WorkoutListState[] = initialState, action: WorkoutListAction) => {
  switch(action.type){
    case WORKOUT_LIST_ACTIONS_TYPES.ADD_WORKOUT:
      return []
    case WORKOUT_LIST_ACTIONS_TYPES.REMOVE_WORKOUT:
      return []
    case WORKOUT_LIST_ACTIONS_TYPES.UPDATE_WORKOUT:
      return []
    default:
      return state;
  }
}