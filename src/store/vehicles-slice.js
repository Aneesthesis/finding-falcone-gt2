const { createSlice } = require("@reduxjs/toolkit");

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: [],
    selectedVehicles: [],
  },
  reducers: {
    setVehicles(state, action) {
      state.vehicles = action.payload.vehicles;
    },
  },
});

export const vehiclesActions = vehiclesSlice.actions;

export default vehiclesSlice;
