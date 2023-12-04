import PlaneAdd from "../components/planes/PlaneAdd";
import PlaneList from "../components/planes/PlaneList";
import { useEffect, useState } from "react";

const PlanePage = () => {
  const [planes, setPlanes] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9999/api/planes")
      .then((response) => response.json())
      .then((data) => setPlanes(data));
  }, [refresh]);

  return (
    <main className="bg-slate-300 h-[100%]">
      <section>
        <PlaneList planes={planes} />
        <PlaneAdd setRefresh={setRefresh} />
      </section>
    </main>
  );
};

export default PlanePage;
