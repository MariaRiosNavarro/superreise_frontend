import { useEffect, useState } from "react";
import PlaneListItem from "./PlaneListItem";

const PlaneList = () => {
  const [planes, setPlanes] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:9999/api/planes")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   });

  if (planes.length === 0) {
    return (
      <section className="h-full flex justify-center items-center">
        <p className="text-xl">Keine Flugzeuge im System</p>
      </section>
    );
  } else {
    return (
      <section>
        <h2>test2</h2>
        {planes.map((plane, key) => (
          <PlaneListItem key={plane.id} plane={plane} />
        ))}
      </section>
    );
  }
};

export default PlaneList;
