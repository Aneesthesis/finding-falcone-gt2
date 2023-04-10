const { createSlice } = require("@reduxjs/toolkit");

const planetsSlice = createSlice({
  name: "planets",
  initialState: {
    planets: [],
    selectedPlanets: [],
  },
  reducers: {
    setPlanets(state, action) {
      state.planets = action.payload.planets;
    },
    selectPlanets(state, action) {
      const selectedPlanet = action.payload;

      if (state.selectedPlanets.length > 0) {
        const existingPlanet = state.selectedPlanets.includes(selectedPlanet);
        if (existingPlanet) return;
      }
      state.selectedPlanets.push(selectedPlanet);
      console.log(state.selectedPlanets.length);
    },
  },
});

export const planetsActions = planetsSlice.actions;

export default planetsSlice;
