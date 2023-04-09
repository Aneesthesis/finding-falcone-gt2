import { configureStore } from "@reduxjs/toolkit";
import planetsSlice from "./planets-slice";
import vehiclesSlice from "./vehicles-slice";

const store = configureStore({
  reducer: { planets: planetsSlice.reducer, vehicles: vehiclesSlice.reducer },
});

export default store;
