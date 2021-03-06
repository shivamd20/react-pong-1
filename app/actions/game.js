export const UPDATE_RIGHT_PADDLE_POSITION = 'UPDATE_RIGHT_PADDLE_POSITION';

export function updateRightPaddle(y) {
  return {
    type: UPDATE_RIGHT_PADDLE_POSITION,
    payload: {
      y,
    }
  };
}


export const UPDATE_LEFT_PADDLE_POSITION = 'UPDATE_LEFT_PADDLE_POSITION';

export function updateLeftPaddle(y) {
  return {
    type: UPDATE_LEFT_PADDLE_POSITION,
    payload: {
      y,
    }
  };
}


export const TOGGLE_PAUSE_GAME = 'TOGGLE_PAUSE_GAME';

export function togglePlayPause(pause=false) {
  return {
    type: TOGGLE_PAUSE_GAME,
    payload: {
      pause,
    }
  };
}


export const INCREASE_PLAYER_SCORE = 'INCREASE_PLAYER_SCORE';

export function increasePlayerScore(player) {
  return {
    type: INCREASE_PLAYER_SCORE,
    payload: {
      player,
    }
  };
}


export const END_GAME = 'END_GAME';

export function endGame(player) {
  return {
    type: END_GAME,
    payload: {
      player,
    }
  };
}


export const START_GAME = 'START_GAME';

export function startGame() {
  return {
    type: START_GAME,
  };
}
