import { GET_LAUNCHES, LaunchesActions } from './types';

export function getNews(): LaunchesActions {
  return {
    type: GET_LAUNCHES
  };
}
