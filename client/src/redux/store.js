import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProducts, getSingleProduct } from "./reducers/product_reducers";
import cartReducer from "./reducers/cart_reducer";

const reducer = combineReducers({
  productList: getProducts,
  product: getSingleProduct,
  cart: cartReducer,
});

const cartItemsLS = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: { cartItems: cartItemsLS },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
