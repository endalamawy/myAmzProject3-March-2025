import { Type } from "./action.type";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      // Check if item already exists
      const existingIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

     if (existingIndex >= 0) {
       // Increase quantity and preserve all item fields
       const updatedBasket = [...state.basket];
       const existingItem = updatedBasket[existingIndex];
       updatedBasket[existingIndex] = {
         ...existingItem, // keep price, title, image, etc.
         qty: existingItem.qty + 1, // increment qty
       };
       return { ...state, basket: updatedBasket };
     } else {
       return {
         ...state,
         basket: [...state.basket, { ...action.item, qty: 1 }],
       };
     }
    case Type.INCREASE_QTY:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case Type.DECREASE_QTY:
      return {
        ...state,
        basket: state.basket
          .map((item) =>
            item.id === action.id ? { ...item, qty: item.qty - 1 } : item
          )
          .filter((item) => item.qty > 0), // remove if qty=0
      };

    case Type.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
