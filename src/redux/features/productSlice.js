import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (name, { rejectWithValue }) => {
    const response = await fetch(
      `https://super.theniwalicrm.com/webapi/webapi.php?type=get_products`
    );
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // When our request is pending:
    // - store the 'pending' state as the status for the corresponding pokemon name
    builder.addCase(fetchProducts.pending, (state, action) => {});
    // When our request is fulfilled:
    // - store the 'fulfilled' state as the status for the corresponding pokemon name
    // - and store the received payload as the data for the corresponding pokemon name
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.products = action.payload.data;
    });
    // When our request is rejected:
    // - store the 'rejected' state as the status for the corresponding pokemon name
    builder.addCase(fetchProducts.rejected, (state, action) => {});
  },
});

// export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
