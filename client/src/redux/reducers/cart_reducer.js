import { CART } from "../constants";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART.ADD_CART_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((itm) => itm.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.id === item.id ? item : x)),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
