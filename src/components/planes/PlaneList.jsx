import PlaneListItem from "./PlaneListItem";

const PlaneList = ({ planes, setRefresh }) => {
  if (planes.length === 0) {
    return (
      <section className="h-full flex justify-center items-center">
        <p className="text-xl">Keine Flugzeuge im System</p>
      </section>
    );
  } else {
    return (
      <section className="mx-24 py-8">
        <h2 className="py-8 text-3xl">Flugzeugliste</h2>
        {planes.map((plane) => (
          <PlaneListItem key={plane.id} plane={plane} />
        ))}
      </section>
    );
  }
};

export default PlaneList;
