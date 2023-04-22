// Action tiplerini tanımlayın
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const TOOGLE_THEME = 'TOOGLE_THEME';
export const APP_STARTED = 'APP_STARTED';

// Action oluşturucularını (action creators) tanımlayın
export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});

export const appStarted = () => ({
  type: APP_STARTED,
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});

export const changeTheme = () => ({
  type: TOOGLE_THEME,
})
