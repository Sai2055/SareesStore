import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const res = await fetch(
    "https://6949f57d1282f890d2d7481d.mockapi.io/products"
  );
  const data = await res.json();
  console.log(data);
  return data;
});

const initialState = {
  entities: [],
  menProducts: [],
  womenProducts: [],
  kidsProducts: [],
  accessories: [],
  status: "idle",
  error: null,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.entities = action.payload[0].products;
        state.menProducts = action.payload[0].products.filter(
          (product) => product.categoryId === 1
        );
        state.womenProducts = action.payload[0].products.filter(
          (p) => p.categoryId === 2
        );
        state.kidsProducts = action.payload[0].products.filter(
          (p) => p.categoryId === 3
        );
        state.accessories = action.payload[0].products.filter(
          (p) => p.categoryId === 4
        );
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default ProductsSlice.reducer;
