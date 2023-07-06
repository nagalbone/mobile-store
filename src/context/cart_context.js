import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";
const CartContext = createContext();

const getLocalMyCartData = () => {
  let localCartData = localStorage.getItem("myCart");
  if (localCartData === [] || localCartData === null) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: getLocalMyCartData(),
  total_item: "0",
  total_amount: "",
  shipping_fee: 150,
};
const Cartprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart
  const addToCart = (id, name, price, amount, image) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, price, amount, image },
    });
  };

  //clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //remove item
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  // increment and decrement

  const setDecrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL_CART_PRICE" });
    dispatch({ type: "TOTAL_CART_COUNT" });
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        removeItem,
        setIncrement,
        setDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { Cartprovider, useCartContext };
