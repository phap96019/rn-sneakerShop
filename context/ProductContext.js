import contextFactory from './contextFactory';
import apiHelper from '../utils/apiHelper';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_APP_LOADING':
      return { ...state, appLoading: true };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'GET_ME':
      return {
        ...state,
        user: action.payload,
        loading: false,
        appLoading: false,
        error: '',
      };
    case 'UPDATE_ME':
      return { ...state, users: action.payload, loading: false };
    case 'GET_CART_ITEMS':
      return {
        ...state,
        cart: action.payload,
        loading: false,
        appLoading: false,
      };
    case 'REMOVE_CART_ITEM':
      const cart = state.cart.filter(item => item._id !== action.payload);
      return { ...state, cart: cart, loading: false };
    case 'SET_USER_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
        appLoading: false,
      };
    case 'CLEAR_USER_ERROR':
      return { ...state, error: '', loading: false, appLoading: false };
    default:
      return state;
  }
};

export const { Provider, Context } = contextFactory(
  authReducer,
  {
    getMe,
    updateMe,
    clearError,
    setLoading,
    getCart,
    removeCartItems,
    setAppLoading,
  },
  {
    cart: null,
    user: null,
    error: '',
    loading: false,
    appLoading: false,
  }
);
