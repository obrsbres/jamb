import "./App.css";
export default function Kocke({ niz, sniz, onSetNiz, onSetSniz }) {
  function clearSelectedDice(e) {
    const broj = Number(e.target.id);
    const empty = niz.findIndex((e) => e === 7);
    const vrednost = sniz[broj];
    onSetNiz(
      niz.map((c, i) => {
        if (i === empty) return (c = vrednost);
        else return c;
      })
    );
    onSetSniz(
      sniz.map((c, i) => {
        if (i === broj) return (c = 7);
        else return c;
      })
    );
    console.log(sniz, niz);
  }
  function setKocka(e) {
    console.log(sniz, niz);
    let isFullSNiz;
    for (let i = 0; i < sniz.length; i++) {
      if (sniz[i] === 0 || sniz[i] === 7) isFullSNiz = false;
      else isFullSNiz = true;
    }
    if (e.target.attributes.src.value === "7.png" || isFullSNiz)
      alert("та коцка је изабрана или је изабрано 5 коцки");
    else {
      const brojKocke = Number(e.target.id);
      let empty = sniz.findIndex((el) => el === 7 || el === 0);
      onSetSniz(
        (sniz) =>
          (sniz = sniz.map((c, i) => {
            if (i === empty) return (c = niz[brojKocke]);
            else return c;
          }))
      );
      onSetNiz(
        (niz) =>
          (niz = niz.map((c, i) => {
            if (i === brojKocke) return (c = 7);
            else return c;
          }))
      );
    }
    console.log(e.target.attributes.src.value);
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
        <img
          id="1"
          onClick={(e) => clearSelectedDice(e)}
          src={`${sniz[1]}.png`}
          alt="dice1"
          className="kocke"
        ></img>
        <img
          id="2"
          onClick={(e) => clearSelectedDice(e)}
          src={`${sniz[2]}.png`}
          alt="dice1"
          className="kocke"
        ></img>
        <img
          id="3"
          onClick={(e) => clearSelectedDice(e)}
          src={`${sniz[3]}.png`}
          alt="dice1"
          className="kocke"
        ></img>
        <img
          id="4"
          onClick={(e) => clearSelectedDice(e)}
          src={`${sniz[4]}.png`}
          alt="dice1"
          className="kocke"
        ></img>
      </div>
    </div>
  );
}
