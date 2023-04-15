import { version } from "react-dom";

const { createSlice } = require("@reduxjs/toolkit");

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: [],
    vehicle1: "",
    vehicle2: "",
    vehicle3: "",
    vehicle4: "",
  },
  reducers: {
    setVehicles(state, action) {
      state.vehicles = action.payload.vehicles;
    },
    setVehicle1(state, action) {
      const selectedVehiclesIndex = action.payload.selectedCBIndex;
      const deselectedVehicleIndex = action.payload.deselectedCBIndex;
      state.vehicle1 = state.vehicles[selectedVehiclesIndex];
      state.vehicle1.total_no -= 1;

      if (deselectedVehicleIndex || deselectedVehicleIndex === 0) {
        state.vehicles[deselectedVehicleIndex].total_no += 1;
      }
    },
  },
});

export const vehiclesActions = vehiclesSlice.actions;

export default vehiclesSlice;
