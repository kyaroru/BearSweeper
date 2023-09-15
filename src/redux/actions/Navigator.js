// @flow


import { createAction } from 'redux-actions';

export const GO_TO_DIFFICULTY = 'GO_TO_DIFFICULTY';
export const GO_TO_GAME = 'GO_TO_GAME';
export const GO_TO_LEADERBOARD = 'GO_TO_LEADERBOARD';

export const goToDifficulty = createAction(GO_TO_DIFFICULTY);
export const goToGame = createAction(GO_TO_GAME);
export const goToLeaderboard = createAction(GO_TO_LEADERBOARD);
