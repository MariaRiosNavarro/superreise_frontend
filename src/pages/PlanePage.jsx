import PlanesList from "../components/planes/PlaneList.jsx";
import PlaneAdd from "../components/planes/PlaneAdd.jsx";

const PlanePage = () => {
  return (
    <main>
      <h1>Unsere Flugzeuge</h1>
      <PlanesList />
      <PlaneAdd />
    </main>
  );
};

export default PlanePage;
