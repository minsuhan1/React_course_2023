import { useReducer } from "react";

import CartContext from "./cart-context";

// Reducer init state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Reducer 함수 (dispatch)
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // 기존 state를 유지하고 새로운 state를 생성
    const updatedItems = state.items.concat(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // State Update
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

// Context Provider
const CartProvider = (props) => {
  // State (useReducer Hook으로 관리)
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // context로 제공하는 상태 수정 함수
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  // 전역적으로 제공할 Context
  const cartContext = {
    // 상태 읽기
    items: cartState.items,
    totalAmount: cartState.totalAmount,

    // 상태 수정
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
