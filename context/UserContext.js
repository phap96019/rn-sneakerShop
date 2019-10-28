import contextFactory from './contextFactory';
import apiHelper from '../utils/apiHelper';
import { navigateReplace } from '../utils/navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
};

export const { Provider, Context } = contextFactory(
  authReducer,
  {},
  { user: null, error: '', loading: false }
);
