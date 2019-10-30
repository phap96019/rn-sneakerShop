import contextFactory from './contextFactory';
import apiHelper from '../utils/apiHelper';
// import { navigateReplace } from '../utils/navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'GET_ME':
      return { ...state, user: action.payload, loading: false };
    case 'UPDATE_ME':
      return { ...state, users: action.payload, loading: false };
    case 'GET_CART':
      return { ...state, cart: action.payload, loading: false };
    case 'SET_USER_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'CLEAR_USER_ERROR':
      return { ...state, error: '', loading: false };
    default:
      return state;
  }
};

const getMe = dispatch => async () => {
  try {
    const { data } = await apiHelper.get(`/api/v1/users/me`);
    console.log('Get me!');

    dispatch({ type: 'GET_ME', payload: data.data.data });
  } catch (error) {
    const payload = error.response ? error.response.data.message : error.message;
    console.log(error, payload);
    dispatch({ type: 'SET_AUTH_ERROR', payload });
  }
};

const updateMe = dispatch => async ({ name, phone, address }) => {
  try {
    if (!name || !phone || !address) {
      throw new Error('Please tell us your infomation');
    }
    const { data } = await apiHelper.patch(`/api/v1/users/updateMe`, {
      name,
      phone,
      address,
    });
    console.log(data.data.user);

    dispatch({ type: 'UPDATE_ME', payload: data.data.user });
  } catch (error) {
    const payload = error.response ? error.response.data.message : error.message;
    console.log(error, payload);
    dispatch({ type: 'SET_USER_ERROR', payload });
  }
};

const clearError = dispatch => () => {
  dispatch({ type: 'CLEAR_USER_ERROR' });
};

const setLoading = dispatch => async () => {
  console.log('loading');

  dispatch({ type: 'SET_LOADING' });
};

const getCart = dispatch => async () => {
  try {
    const { data } = await apiHelper.get(`/api/v1/users/cart`);
    console.log('Get cart!', data.data.data.length);

    dispatch({ type: 'GET_CART', payload: data.data.data });
  } catch (error) {
    const payload = error.response ? error.response.data.message : error.message;
    console.log(error, payload);
    dispatch({ type: 'SET_USER_ERROR', payload });
  }
};

export const { Provider, Context } = contextFactory(
  authReducer,
  { getMe, updateMe, clearError, setLoading, getCart },
  {
    cart: [],
    user: null,
    error: '',
    loading: false,
  }
);
