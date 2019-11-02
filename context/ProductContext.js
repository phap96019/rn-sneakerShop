import contextFactory from './contextFactory';
import apiHelper from '../utils/apiHelper';

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_APP_LOADING':
      return { ...state, appLoading: true };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'GET_LIST_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        loading: false,
        appLoading: false,
        error: '',
      };
    case 'UPDATE_PRODUCT_LIST':
      return { ...state, products: action.payload, loading: false };
    case 'SET_PRODUCT_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
        appLoading: false,
      };
    case 'CLEAR_PRODUCT_ERROR':
      return { ...state, error: '', loading: false, appLoading: false };
    default:
      return state;
  }
};

const setAppLoading = dispatch => async () => {
  console.log('App loading');
  dispatch({ type: 'SET_APP_LOADING' });
};

const setLoading = dispatch => async () => {
  console.log('loading');
  dispatch({ type: 'SET_LOADING' });
};

const getProducts = dispatch => async query => {
  try {
    const { data } = await apiHelper.get(`/api/v1/users/products?${query}`);
    console.log('Get products!');

    dispatch({ type: 'GET_LIST_PRODUCTS', payload: data.data.data });
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;
    console.log(error, payload);
    dispatch({ type: 'SET_PRODUCT_ERROR', payload });
  }
};

export const { Provider, Context } = contextFactory(
  productReducer,
  { getProducts, setLoading, setAppLoading },
  {
    products: null,
    error: '',
    loading: false,
    appLoading: false,
  }
);
