const PlaneListItem = ({ plane }) => {
  return (
    <article className="border rounded grid grid-cols-6">
      <p className="py-4 pl-4 border  border-green-800">
        ID:
        <span className="text-xl bold-900 text-red-950 block"> {plane.id}</span>
      </p>
      <p className="py-4 pl-4 border  border-green-800">
        Hersteller:
        <span className="text-xl bold-900 text-red-950 block">
          {" "}
          {plane.hersteller}
        </span>
      </p>
      <p className="py-4 pl-4 border  border-green-800">
        Antriebsart:
        <span className="text-xl bold-900 text-red-950 block">
          {" "}
          {plane.antriebsart}
        </span>
      </p>
      <p className="py-4 pl-4 border  border-green-800">
        passagier:
        <span className="text-xl bold-900 text-red-950 block">
          {" "}
          {plane.passagier}
        </span>
      </p>
      <p className="py-4 pl-4 border  border-green-800">
        reichweite:
        <span className="text-xl bold-900 text-red-950 block">
          {plane.reichweite}
        </span>
      </p>
      <p className="py-4 pl-4 border  border-green-800">
        Kennzeichen:
        <span className="text-xl bold-900 text-red-950 block"> {plane.id}</span>
      </p>
    </article>
  );
};

export default PlaneListItem;
