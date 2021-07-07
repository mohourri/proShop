import { GET_PRODUCTS, GET_SINGLE_PRODUCT } from "../constants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS.REQUEST });
    const { data } = await axios.get("/api/products");

    dispatch({
      type: GET_PRODUCTS.SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS.FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_PRODUCT.REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: GET_SINGLE_PRODUCT.SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_PRODUCT.FAILED,
      payload:
        error.response && error.response.data.message
          ? error.data.message
          : error.message,
    });
  }
};
