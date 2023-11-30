const PlaneListItem = ({ plane }) => {
  return (
    <article className="border rounded grid grid-cols-6">
      <span>ID: {plane.id}</span>
      <p>Hersteller: {plane.hersteller}</p>
      <p>Antriebsart: {plane.antriebsart}</p>
      <p>passagier: {plane.passagier}</p>
      <p>reichweite: {plane.reichweite}</p>
      <p>Kennzeichen: {plane.id}</p>
    </article>
  );
};

export default PlaneListItem;
