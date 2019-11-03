import contextFactory from './contextFactory';
import apiHelper from '../utils/apiHelper';
import { navigate } from '../utils/navigationRef';

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_APP_LOADING':
      return { ...state, appLoading: true };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'GET_LIST_PRODUCTS':
      return {
        ...state,
        products: action.payload.products,
        searchQuery: action.payload.query,
        sortQuery: '',
        filterQuery: '',
        loading: false,
        appLoading: false,
        filter: null,
        error: '',
      };
    case 'FILTER_LIST_PRODUCTS':
      return {
        ...state,
        products: action.payload.products,
        filterQuery: action.payload.query,
        loading: false,
        filter: action.payload.filter,
      };
    case 'CLEAR_FILTER':
      return {
        ...state,
        loading: false,
        filterQuery: '',
        products: action.payload.products,
        filter: null,
      };
    case 'SORT_LIST_PRODUCTS':
      return {
        ...state,
        loading: false,
        appLoading: false,
        error: '',
        products: action.payload.products,
        sortQuery: action.payload.sortQuery,
      };
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

const searchProducts = dispatch => async text => {
  try {
    const nameCapitalized = text.charAt(0).toUpperCase() + text.slice(1);
    const query = `&name[regex]=${nameCapitalized}`;
    console.log(`/api/v1/products?${query}`);

    const { data } = await apiHelper.get(`/api/v1/products?${query}`);
    console.log('Get products!');

    dispatch({
      type: 'GET_LIST_PRODUCTS',
      payload: { products: data.data.data, query },
    });
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;
    console.log(error, payload);
    dispatch({ type: 'SET_PRODUCT_ERROR', payload });
  }
  navigate('SearchResult', { search: text });
};

const filterProducts = dispatch => async (
  searchQuery,
  filterQuery,
  sortQuery,
  filter
) => {
  try {
    const { data } = await apiHelper.get(
      `/api/v1/products?${searchQuery}${filterQuery}${sortQuery}`
    );
    console.log(
      'update products!',
      `/api/v1/products?${searchQuery}${filterQuery}${sortQuery}`
    );

    dispatch({
      type: 'FILTER_LIST_PRODUCTS',
      payload: { products: data.data.data, query: filterQuery, filter: filter },
    });
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;
    console.log(error, payload);
    dispatch({ type: 'SET_PRODUCT_ERROR', payload });
  }
  navigate('SearchResult');
};

const clearFilter = dispatch => async (searchQuery, sortQuery) => {
  try {
    const { data } = await apiHelper.get(
      `/api/v1/products?${searchQuery}${sortQuery}`
    );

    dispatch({
      type: 'CLEAR_FILTER',
      payload: { products: data.data.data },
    });
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;
    console.log(error, payload);
    dispatch({ type: 'SET_PRODUCT_ERROR', payload });
  }
  navigate('SearchResult');
};

const sortProducts = dispatch => async (
  searchQuery,
  filterQuery,
  sortQuery
) => {
  try {
    const { data } = await apiHelper.get(
      `/api/v1/products?${searchQuery}${filterQuery}${sortQuery}`
    );
    console.log(
      'sort!',
      `/api/v1/products?${searchQuery}${filterQuery}${sortQuery}`
    );

    dispatch({
      type: 'SORT_LIST_PRODUCTS',
      payload: { products: data.data.data, sortQuery: sortQuery },
    });
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;
    console.log(error, payload);
    dispatch({ type: 'SET_PRODUCT_ERROR', payload });
  }
  navigate('SearchResult');
};

export const { Provider, Context } = contextFactory(
  productReducer,
  {
    searchProducts,
    filterProducts,
    setLoading,
    setAppLoading,
    clearFilter,
    sortProducts,
  },
  {
    products: null,
    error: '',
    loading: false,
    appLoading: false,
    searchQuery: '',
    filterQuery: '',
    sortQuery: '',
    filter: null,
    sort: '-createAt',
  }
);
