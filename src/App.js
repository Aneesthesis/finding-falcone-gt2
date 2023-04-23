import { useDispatch } from "react-redux";
import Header from "./components/Header";
import { fetchPlanets } from "./store/planets-action";
import fetchVehicles from "./store/vehicles-action";
import Planets from "./components/Planets/Planets";
import Vehicles from "./components/Vehicles/Vehicles";
import FindFalcone from "./components/UI/FindFalcone";

function App() {
  const dispatch = useDispatch();
  let initialRun = true;

  if (initialRun) {
    dispatch(fetchPlanets());
    dispatch(fetchVehicles());
  }

  return (
    <div className="App mt-4">
      <Header />
      <div className="mx-28">
        <Planets />
        <Vehicles />
      </div>
      <FindFalcone />
    </div>
  );
}

export default App;
