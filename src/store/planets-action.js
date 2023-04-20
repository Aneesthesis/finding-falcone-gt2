import { planetsActions } from "./planets-slice";

export const fetchPlanets = () => {
  return async (dispatch) => {
    const fetchedData = async () => {
      console.log("yes");
      const response = await fetch("https://findfalcone.geektrust.com/planets");
      if (!response.ok) {
        throw new Error("Problem in loading planets!");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const planetsData = await fetchedData();
      dispatch(
        planetsActions.setPlanets({
          planets: planetsData || [],
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  };
};
