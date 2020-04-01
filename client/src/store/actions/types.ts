export const GET_LAUNCHES = 'GET_LAUNCHES';
export const SET_LAUNCHES = 'SET_LAUNCHES';

export type GetLaunchesAction = {
  type: typeof GET_LAUNCHES;
};

export type SetLaunchesAction = {
  type: typeof SET_LAUNCHES;
  payload: unknown[];
};

export type LaunchesActions = GetLaunchesAction | SetLaunchesAction;
