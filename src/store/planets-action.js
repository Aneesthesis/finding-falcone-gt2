import { planetsActions } from "./planets-slice";

// export const fetchPlanets = () => {
//   console.log("yes");
//   return async (dispatch) => {
//     const fetchedData = async () => {
//       const response = await fetch("https://findfalcone.herokuapp.com/planets");

//       if (!response.ok) {
//         throw new Error("There was a glitch in loading planets");
//       }
//       const data = await response.json();

//       console.log(data);
//       return data;
//     };
//     try {
//       const planetsData = await fetchedData();
//       dispatch(planetsActions.setPlanets({ planets: planetsData || [] }));
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

export const fetchPlanets = () => {
  return async (dispatch) => {
    const fetchedData = async () => {
      console.log("yes");
      const response = await fetch("https://findfalcone.herokuapp.com/planets");
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
