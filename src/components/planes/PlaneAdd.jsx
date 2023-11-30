import { useRef } from "react";

const PlaneAdd = () => {
  const idRef = useRef();
  const herstellerRef = useRef();
  const antriebRef = useRef();
  const passagiereRef = useRef();
  const schildRef = useRef();
  const reichweiteRef = useRef();

  //   const speichern = () =>{
  //     console.log(idRef.current.value);
  //     const plane =(
  //         hersteller: herstellerRef.current.value,
  //         antriebsart: antriebRef.current.value,
  //         id: idRef.current.value,
  //         passagiere: passagiereRef.current.value,
  //         reichweite: reichweite.current.value
  //     );
  // }

  const speichern = () => {
    console.log(idRef.current.value);
  };

  return (
    <section className="flex flex-col gap-4 bg-gray-400">
      <div>
        <label htmlFor="planeid">Flugzeugnummernschild</label>
        <input ref={idRef} type="text" id="planeid" />
      </div>
      <div>
        <label htmlFor="hersteller">Hersteller</label>
        <input ref={herstellerRef} type="text" id="hersteller" />
      </div>
      <div>
        <label htmlFor="antrieb">Antriebsart</label>
        <input ref={antriebRef} type="text" id="antrieb" />
      </div>
      <div>
        <label htmlFor="passagiere">Passagiere</label>
        <input ref={passagiereRef} type="text" id="passagiere" />
      </div>
      <div>
        <label htmlFor="reichweite">Reichweite</label>
        <input type="text" id="reichweite" />
      </div>
      <div>
        <label htmlFor="schild">Flugzeugnummernschild</label>
        <input ref={schildRef} type="text" id="schild" />
      </div>
      <div>
        <label htmlFor="schild">Reichweite</label>
        <input ref={reichweiteRef} type="text" id="schild" />
      </div>
      <div>
        <button onClick={speichern}>speichern</button>
      </div>
    </section>
  );
};

export default PlaneAdd;
