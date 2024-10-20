import { useState } from "react";
import "./App.css";
export default function Kocke({ niz, sniz, onSetNiz, onSetSniz }) {
  const [k0, setK0] = useState(true);
  const [k1, setK1] = useState(true);
  const [k2, setK2] = useState(true);
  const [k3, setK3] = useState(true);
  const [k4, setK4] = useState(true);
  const [k5, setK5] = useState(true);
  function clearSelectedDice(e) {
    console.log(Number(e.target.id));
    const broj = Number(e.target.id);
    const empty = niz.findIndex((e) => e === 7);
    console.log(empty);
    const vrednost = sniz[broj];
    console.log(vrednost);
    onSetNiz(
      niz.map((c, i) => {
        if (c === empty) return (c = vrednost);
        else return c;
      })
    );
  }
  function setKocka(e) {
    if (e.target.attributes.src.value === "7.png" || sniz[4])
      alert("та коцка је изабрана или је изабрано 5 коцки");
    else {
      const brojKocke = Number(e.target.id);
      if (brojKocke === 0) setK0((k) => !k);
      if (brojKocke === 1) setK1((k) => !k);
      if (brojKocke === 2) setK2((k) => !k);
      if (brojKocke === 3) setK3((k) => !k);
      if (brojKocke === 4) setK4((k) => !k);
      if (brojKocke === 5) setK5((k) => !k);
      onSetSniz((sniz) => (sniz = [...sniz, niz[brojKocke]]));
      onSetNiz(
        (niz) =>
          (niz = niz.map((c, i) => {
            if (i === brojKocke) return (c = 7);
            else return c;
          }))
      );
    }
  }
  return (
    <div className="polje_kocki">
      <div className={niz ? "bacene_kocke" : "ne_prikazuj"}>
        <img
          onClick={(e) => setKocka(e)}
          id="0"
          className="kocke"
          src={`${Number(niz[0])}.png`}
          alt="dice1"
        ></img>
        <img
          onClick={(e) => setKocka(e)}
          id="1"
          className="kocke"
          src={`${Number(niz[1])}.png`}
          alt="dice2"
        ></img>
        <img
          onClick={(e) => setKocka(e)}
          id="2"
          className="kocke"
          src={`${Number(niz[2])}.png`}
          alt="dice3"
        ></img>
        <img
          onClick={(e) => setKocka(e)}
          id="3"
          className="kocke"
          src={`${Number(niz[3])}.png`}
          alt="dice4"
        ></img>
        <img
          onClick={(e) => setKocka(e)}
          id="4"
          className="kocke"
          src={`${Number(niz[4])}.png`}
          alt="dice5"
        ></img>
        <img
          onClick={(e) => setKocka(e)}
          id={5}
          className="kocke"
          src={`${Number(niz[5])}.png`}
          alt="dice6"
        ></img>
      </div>
      <div className={sniz ? "izabrane_kocke" : "ne_prikazuj"}>
        <img
          id="0"
          onClick={(e) => clearSelectedDice(e)}
          src={`${sniz[0]}.png`}
          alt="dice1"
          className="kocke"
        ></img>
      </div>
    </div>
  );
}
