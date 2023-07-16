import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchProductsApi } from "./../../utils/apiFruits";

fetchProductsApi();
const initialState = {
  products: [
    {
      id: 1,
      name: "Apple",
      description: "Deliciois",
      Price: 48,
      foto: "/src/assets/fotos/apple.jpg",
    },
    {
      id: 2,
      name: "Avocado",
      description:
        "While preparing a delicious guacamole, I realized that the Avocato's creamy texture serves as the perfect framework for blending the flavors",
      Price: 64,
      foto: "/src/assets/fotos/avocato.jpg",
    },
    {
      id: 3,
      name: "Banana",
      description:
        "Bananas, a beloved fruit, are rich in nutrients, delicious, and versatile, enjoyed worldwide for their sweet taste, vibrant color, and convenient, peelable skin.",
      Price: 10,
      foto: "/src/assets/fotos/banana.jpg",
    },
    {
      id: 4,
      name: "Blueberry",
      description:
        "Blueberries, tiny and bursting with flavor, are antioxidant-rich fruits adored for their sweet-tart taste, vibrant color, and health benefits.",
      Price: 87,
      foto: "/src/assets/fotos/blueberry.jpg",
    },
    {
      id: 5,
      name: "Cherry1",
      description:
        "Cherries, succulent and colorful, are delicious fruits cherished for their sweet-tart taste, vibrant hues, and versatility in various culinary delights.",
      Price: 3,
      foto: "/src/assets/fotos/cherry.jpg",
    },
    {
      id: 6,
      name: "Cramberry",
      description:
        "Cranberries, tart and vibrant, are antioxidant-packed fruits known for their tangy flavor, vibrant red hue, and potential health benefits.",
      Price: 100,
      foto: "/src/assets/fotos/kramberry.jpg",
    },
    {
      id: 7,
      name: "Lemon",
      description:
        "Lemons, zesty and refreshing, are citrus fruits cherished for their tangy taste, vibrant yellow color, and their versatility in culinary creations and invigorating beverages.",
      Price: 47,
      foto: "/src/assets/fotos/lemon.jpg",
    },
    {
      id: 8,
      name: "Mango",
      description:
        "Mangoes, tropical and luscious, are juicy fruits prized for their sweet, tangy flavor, golden-orange flesh, and ability to transport taste buds to exotic lands.",
      Price: 24,
      foto: "/src/assets/fotos/mango.jpg",
    },
    {
      id: 9,
      name: "Papaya",
      description:
        "Papayas, tropical and luscious, are nutrient-rich fruits treasured for their sweet, musky flavor, vibrant orange flesh, and potential digestive health benefits.",
      Price: 7,
      foto: "/src/assets/fotos/papaya.jpg",
    },
    {
      id: 10,
      name: "Pineapple",
      description:
        "Pineapples, tropical and juicy, are exotic fruits admired for their tangy-sweet taste, vibrant golden flesh, and the ability to instantly transport one to a sunny island paradise.",
      Price: 94,
      foto: "/src/assets/fotos/pineapple.jpg",
    },
    {
      id: 11,
      name: "Pear",
      description:
        "Pears, crisp and succulent, are versatile fruits celebrated for their sweet, juicy flavor, smooth texture, and ability to elevate both savory and sweet dishes with their delightful taste.",
      Price: 22,
      foto: "/src/assets/fotos/pear.jpg",
    },
    {
      id: 12,
      name: "Rasperry",
      description:
        "Raspberries, delicate and flavorful, are vibrant berries cherished for their tart-sweet taste, brilliant red color, and ability to add a burst of freshness to desserts and breakfasts alike.",
      Price: 65,
      foto: "/src/assets/fotos/rasperry.jpg",
    },
    {
      id: 13,
      name: "Strawberry",
      description:
        "Strawberries, luscious and vibrant, are beloved fruits cherished for their sweet-tart taste, ruby-red color, and versatility in desserts, salads, and refreshing summer treats.",
      Price: 4,
      foto: "/src/assets/fotos/strawberry.jpg",
    },
    {
      id: 14,
      name: "Tangerine",
      description:
        "Tangerines, bright and aromatic, are citrus fruits adored for their refreshing, sweet-tart taste, vibrant orange color, and ability to brighten up any moment with their zesty zest.",
      Price: 69,
      foto: "/src/assets/fotos/tangerine.jpg",
    },
    {
      id: 14,
      name: "Tangerine T",
      description:
        "Tangerines, bright and aromatic, are citrus fruits adored for their refreshing, sweet-tart taste, vibrant orange color, and ability to brighten up any moment with their zesty zest.",
      Price: 34,
      foto: "/src/assets/fotos/tangerine-t.jpg",
    },
    {
      id: 14,
      name: "Water melon",
      description:
        "Tangerines, bright and aromatic, are citrus fruits adored for their refreshing, sweet-tart taste, vibrant orange color, and ability to brighten up any moment with their zesty zest.",
      Price: 69,
      foto: "/src/assets/fotos/watermelon.jpg",
    },
  ],
  status: "",
  error: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProduct: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsApi.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductsApi.fulfilled, (state, action) => {
        console.log(state);
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ? action.error.message : "";
      });
  },
});

export const selectAllProducts = (state: any) => state.products;
export const getProductsError = (state: any) => state.products.error;
export const getProductsStatus = (state: any) => state.products.status;

export const { fetchProduct } = productSlice.actions;

export default productSlice.reducer;
