const { createSlice } = require("@reduxjs/toolkit");

const planetsSlice = createSlice({
  name: "planets",
  initialState: {
    planets: [],
    planet1: "",
    planet2: "",
    planet3: "",
    planet4: "",
  },
  reducers: {
    setPlanets(state, action) {
      state.planets = action.payload.planets;
    },
    selectPlanet1(state, action) {
      const selectedPlanet = action.payload;
      state.planet1 = selectedPlanet;
    },
    selectPlanet2(state, action) {
      const selectedPlanet = action.payload;
      state.planet1 = selectedPlanet;
    },
  },
});

export const planetsActions = planetsSlice.actions;
export default planetsSlice;
