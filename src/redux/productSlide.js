import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";
const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addCartItem: (state, action) => {
      const check = state.cartItem.some((e) => e._id === action.payload._id);
      if (check) {
        toast("Sản phẩm đã có trong  giỏ hàng");
      } else {
        toast("Thêm vào giỏ thành công");
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },
    deleteCartItem: (state, action) => {
      toast("Sản phẩm đã được xóa khỏi giỏ hàng");
      const index = state.cartItem.findIndex((e) => e._id === action.payload);
      state.cartItem.splice(index, 1);
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((e) => e._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;

      const price = state.cartItem[index].price;
      const total = price * qtyInc;

      state.cartItem[index].total = total;
    },
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((e) => e._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        const qtyDnc = --qty;
        state.cartItem[index].qty = qtyDnc;

        state.cartItem[index].qty = qtyDnc;
        const price = state.cartItem[index].price;
        const total = price * qtyDnc;

        state.cartItem[index].total = total;
      } else {
        state.cartItem.splice(index, 1);
      }
    },
  },
});

export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
} = productSlide.actions;

export default productSlide.reducer;
