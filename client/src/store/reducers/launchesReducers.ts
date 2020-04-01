import { LaunchesActions, GET_LAUNCHES, SET_LAUNCHES } from '..';
import { State } from '.';

export const initialState: State = { launches: [] };

export function reducer(state = initialState, action: LaunchesActions): State {
  switch (action.type) {
    case GET_LAUNCHES:
      return state;

    case SET_LAUNCHES:
      return { ...state, launches: action.payload };

    default:
      return state;
  }
}
