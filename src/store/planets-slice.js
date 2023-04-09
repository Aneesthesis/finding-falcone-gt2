const { createSlice } = require("@reduxjs/toolkit");

const planetsSlice = createSlice({
  name: "planets",
  initialState: {
    planets: [],
    selectedPlanets: [],
  },
  reducers: {
    setPlanets(state, action) {
      state.planets = action.payload;
    },
  },
});

export const planetsActions = planetsSlice.actions;

export default planetsSlice;
