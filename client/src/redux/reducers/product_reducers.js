import { GET_PRODUCTS, GET_SINGLE_PRODUCT } from "../constants";

export const getProducts = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS.REQUEST:
      return {
        isLoading: true,
        products: [],
      };

    case GET_PRODUCTS.SUCCESS:
      return {
        isLoading: false,
        products: action.payload,
      };

    case GET_PRODUCTS.FAILED:
      return {
        isLoading: false,
        products: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getSingleProduct = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT.REQUEST:
      return { isLoading: true, product: { reviews: [] }, ...state };
    case GET_SINGLE_PRODUCT.SUCCESS:
      return { isLoading: false, product: action.payload };
    case GET_SINGLE_PRODUCT.FAILED:
      return { error: action.payload, isLoading: false };

    default:
      return state;
  }
};
