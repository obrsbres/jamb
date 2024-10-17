import { useState } from "react";
import "./App.css";
export default function Kocke({ niz, sniz, onSetNiz, onSetSniz }) {
  const [k0, setK0] = useState(true);
  const [k1, setK1] = useState(true);
  const [k2, setK2] = useState(true);
  const [k3, setK3] = useState(true);
  const [k4, setK4] = useState(true);
  const [k5, setK5] = useState(true);
  const [l0, setL0] = useState(true);
  const [l1, setL1] = useState(true);
  const [l2, setL2] = useState(true);
  const [l3, setL3] = useState(true);
  const [l4, setL4] = useState(true);

  function setKocka(e) {
    console.log(e.target.attributes.src);
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
      console.log(k0, k1, k2, k3, k4, k5);
      onSetSniz((sniz) => (sniz = [...sniz, niz[brojKocke]]));
    }
  }
  function setIKocka(e) {
    if (e.target.attributes.src.value === "7.png") alert("поље је празно");
    else {
      const brojKocke = Number(e.target.id);
      if (brojKocke === 0) setL0((l) => !l);
      if (brojKocke === 1) setL1((l) => !l);
      if (brojKocke === 2) setL2((l) => !l);
      if (brojKocke === 3) setL3((l) => !l);
      if (brojKocke === 4) setL4((l) => !l);
    }
  }
  return (
    <div className="polje">
      <div className={niz ? "bacene_kocke" : "ne_prikazuj"}>
        <img
          onClick={(e) => setKocka(e)}
          id="0"
          className="kocke"
          src={`${k0 ? Number(niz[0]) : "7"}.png`}
          alt="dice1"
        ></img>
        <img
          onClick={(e) => setKocka(e)}
          id="1"
          className="kocke"
          src={`${k1 ? Number(niz[1]) : "7"}.png`}
          alt="dice2"
        ></img>
        <img
          onClick={(e) => setKocka(e)}
          id="2"
          className="kocke"
          src={`${k2 ? Number(niz[2]) : "7"}.png`}
          alt="dice3"
        ></img>
        <img
          onClick={(e) => setKocka(e)}
          id="3"
          className="kocke"
          src={`${k3 ? Number(niz[3]) : "7"}.png`}
          alt="dice4"
        ></img>
        <img
          onClick={(e) => setKocka(e)}
          id="4"
          className="kocke"
          src={`${k4 ? Number(niz[4]) : "7"}.png`}
          alt="dice5"
        ></img>
        <img
          onClick={(e) => setKocka(e)}
          id={5}
          className="kocke"
          src={`${k5 ? Number(niz[5]) : "7"}.png`}
          alt="dice6"
        ></img>
      </div>
      <div className="izabrane_kocke">
        <img
          id={0}
          onClick={(e) => {
            let empty = niz.findIndex((el) => el === 7);
            onSetNiz((niz) => (niz = niz.splice(empty, 1, sniz[0])));

            onSetSniz((sniz) => (sniz = sniz.slice(1, 5)));
          }}
          className="kocke"
          src={`${l0 ? Number(sniz[0]) : "7"}.png`}
          alt="dice1"
        ></img>
        {/* <img
          onClick={() => {
            let a = sniz.slice(0, 1);
            let b = sniz.slice(2, 5);
            setsNiz((sniz) => (sniz = a.concat(b)));
          }}
          className="kocke"
          src={`${Number(sniz[1])}.png`}
          alt="dice2"
        ></img>
        <img
          onClick={() => {
            let a = sniz.slice(0, 2);
            let b = sniz.slice(3, 5);
            setsNiz((sniz) => (sniz = a.concat(b)));
          }}
          className="kocke"
          src={`${Number(sniz[2])}.png`}
          alt="dice3"
        ></img>
        <img
          onClick={() => {
            let a = sniz.slice(0, 3);
            let b = sniz.slice(4, 5);
            setsNiz((sniz) => (sniz = a.concat(b)));
          }}
          className="kocke"
          src={`${Number(sniz[3])}.png`}
          alt="dice4"
        ></img>
        <img
          onClick={() => {
            setsNiz((sniz) => (sniz = sniz.slice(0, 4)));
          }}
          className="kocke"
          src={`${Number(sniz[4])}.png`}
          alt="dice5"
        ></img> */}
      </div>
    </div>
  );
}
