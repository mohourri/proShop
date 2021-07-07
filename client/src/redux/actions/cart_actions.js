import axios from "axios";
import { CART } from "../constants";

export const addCartItem = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART.ADD_CART_ITEM,
    payload: {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItem = (id) => (dispatch, getState) => {
  const newItems = getState().cart.cartItems.filter((it) => it.id !== id);
  dispatch({ type: CART.REMOVE_CART_ITEM, payload: newItems });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
