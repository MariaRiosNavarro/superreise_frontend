import { useRef, useState } from "react";

const PlaneAdd = ({ setRefresh }) => {
  const [error, setError] = useState(false);

  const idRef = useRef();
  const herstellerRef = useRef();
  const antriebRef = useRef();
  const passagiereRef = useRef();
  const reichweiteRef = useRef();

  const save = () => {
    if (idRef.current.value === "") {
      return setError(true);
    } else {
      // console.log(idRef.current.value);
      const plane = {
        hersteller: herstellerRef.current.value,
        antriebsart: antriebRef.current.value,
        id: idRef.current.value,
        passagiere: passagiereRef.current.value,
        reichweite: reichweiteRef.current.value,
      };

      fetch("http://localhost:9999/api/planes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(plane),
      }).then((response) => {
        if (response.ok) {
          // leeren der formular wenn der flugzeug gesendet worden ist
          herstellerRef.current.value = "";
          antriebRef.current.value = "";
          idRef.current.value = "";
          passagiereRef.current.value = "";
          reichweiteRef.current.value = "";
          //mit diesen Refresh wird nur das neu geladen, nicht die ganze seite
          setRefresh((prev) => !prev);
        }
      });
    }
  };

  return (
    <section className="flex flex-col justify-center items-center gap-4 mx-24 my-4">
      <div className="w-[44rem] bg-green-500 p-4 flex justify-between items-center">
        <label htmlFor="planeid">Flugzeugnummernschild</label>
        {error ? (
          <p className="block text-red-600 align-bottom">
            "Nummernschild IST notwendig"
          </p>
        ) : (
          ""
        )}
        <input
          className="p-4 rounded-xl"
          ref={idRef}
          type="text"
          id="planeid"
          required
        />
      </div>
      <div className="w-[44rem] bg-green-500 p-4 flex justify-between items-center">
        <label htmlFor="hersteller">Hersteller</label>
        <input
          className="p-4 rounded-xl"
          ref={herstellerRef}
          type="text"
          id="hersteller"
        />
      </div>
      <div className="w-[44rem] bg-green-500 p-4 flex justify-between items-center">
        <label htmlFor="antrieb">Antriebsart</label>
        <input
          className="p-4 rounded-xl"
          ref={antriebRef}
          type="text"
          id="antrieb"
        />
      </div>
      <div className="w-[44rem] bg-green-500 p-4 flex justify-between items-center">
        <label htmlFor="passagiere">Passagiere</label>
        <input
          className="p-4 rounded-xl"
          ref={passagiereRef}
          type="text"
          id="passagiere"
        />
      </div>
      <div className="w-[44rem] bg-green-500 p-4 flex justify-between items-center">
        <label htmlFor="schild">Reichweite</label>
        <input
          className="p-4 rounded-xl"
          ref={reichweiteRef}
          type="text"
          id="schild"
        />
      </div>
      <div className="w-[44rem] bg-green-900 text-yellow-100  p-4 flex justify-center items-center">
        <button onClick={save}>speichern</button>
      </div>
    </section>
  );
};

export default PlaneAdd;
