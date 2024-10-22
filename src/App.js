import { useState } from "react";
import "./App.css";
import grb from "./grb.png";
import Kocke from "./kocke.js";
function App() {
  const [bacanje, setBacanje] = useState(0);
  const [niz, setNiz] = useState([0, 0, 0, 0, 0, 0]);
  const [sniz, setsNiz] = useState([0, 0, 0, 0, 0]);
  const [dole, setDole] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  function writeData(e, a) {
    const kolona = e.target.id;
    if (kolona === "dole")
      setDole((dole) =>
        dole.map((c, i) => {
          if (i === a - 1) return (c = Number(e.target.innerText));
          if (i === 7 && a === "tr") return (c = Number(e.target.innerText));
          if (i === 8 && a === "ke") return (c = Number(e.target.innerText));
          if (i === 9 && a === "fu") return (c = Number(e.target.innerText));
          if (i === 10 && a === "po") return (c = Number(e.target.innerText));
          if (i === 11 && a === "ja") return (c = Number(e.target.innerText));
          else return c;
        })
      );
    setDole((dole) =>
      dole.map((c, i) => {
        if (i === 6)
          return dole.slice(0, 6).reduce((a, b) => {
            return a + b;
          }, 0);
        else return c;
      })
    );
  }
  console.log(dole);
  function novoBacanje() {
    setBacanje((b) => (b = 0));
    setNiz((niz) => (niz = [0, 0, 0, 0, 0, 0]));
    setsNiz((sniz) => (sniz = [0, 0, 0, 0, 0]));
  }
  function write1(e, a) {
    let zbir = 0;
    for (let i = 0; i < 6; i++) {
      if (sniz[i] === a) zbir = zbir + a;
    }
    e.target.innerText = zbir;
    novoBacanje();
    writeData(e, a);
  }
  function writeTriling(e, tr) {
    let zbir = 0;
    if (sniz[0] === sniz[1] && sniz[0] === sniz[2]) zbir = 3 * sniz[0];
    if (sniz[0] === sniz[1] && sniz[0] === sniz[3]) zbir = 3 * sniz[0];
    if (sniz[0] === sniz[1] && sniz[0] === sniz[4]) zbir = 3 * sniz[0];
    if (sniz[1] === sniz[2] && sniz[1] === sniz[3]) zbir = 3 * sniz[1];
    if (sniz[1] === sniz[2] && sniz[1] === sniz[4]) zbir = 3 * sniz[1];
    if (sniz[2] === sniz[3] && sniz[2] === sniz[4]) zbir = 3 * sniz[2];
    e.target.innerText = zbir;
    writeData(e, tr);
  }
  function writeFull(e, fu) {
    let zbir = 0;
    if (
      sniz[0] === sniz[1] &&
      sniz[0] === sniz[2] &&
      sniz[3] === sniz[4] &&
      sniz[0] !== sniz[4]
    )
      zbir = 3 * sniz[0] + 2 * sniz[3];
    if (
      sniz[0] === sniz[1] &&
      sniz[0] === sniz[3] &&
      sniz[2] === sniz[4] &&
      sniz[0] !== sniz[4]
    )
      zbir = 3 * sniz[0] + 2 * sniz[2];
    if (
      sniz[0] === sniz[1] &&
      sniz[0] === sniz[4] &&
      sniz[2] === sniz[3] &&
      sniz[0] !== sniz[3]
    )
      zbir = 3 * sniz[0] + 2 * sniz[2];
    if (
      sniz[0] === sniz[2] &&
      sniz[0] === sniz[3] &&
      sniz[1] === sniz[4] &&
      sniz[0] !== sniz[4]
    )
      zbir = 3 * sniz[0] + 2 * sniz[1];
    if (
      sniz[0] === sniz[2] &&
      sniz[0] === sniz[4] &&
      sniz[1] === sniz[3] &&
      sniz[0] !== sniz[3]
    )
      zbir = 3 * sniz[0] + 2 * sniz[1];
    if (
      sniz[0] === sniz[3] &&
      sniz[0] === sniz[4] &&
      sniz[1] === sniz[2] &&
      sniz[0] !== sniz[2]
    )
      zbir = 3 * sniz[0] + 2 * sniz[1];
    if (
      sniz[1] === sniz[2] &&
      sniz[1] === sniz[3] &&
      sniz[0] === sniz[4] &&
      sniz[1] !== sniz[4]
    )
      zbir = 3 * sniz[1] + 2 * sniz[0];
    if (
      sniz[1] === sniz[2] &&
      sniz[1] === sniz[4] &&
      sniz[0] === sniz[3] &&
      sniz[1] !== sniz[3]
    )
      zbir = 3 * sniz[1] + 2 * sniz[0];
    if (
      sniz[1] === sniz[3] &&
      sniz[1] === sniz[4] &&
      sniz[0] === sniz[2] &&
      sniz[1] !== sniz[2]
    )
      zbir = 3 * sniz[1] + 2 * sniz[0];
    if (
      sniz[2] === sniz[3] &&
      sniz[2] === sniz[4] &&
      sniz[0] === sniz[1] &&
      sniz[2] !== sniz[1]
    )
      zbir = 3 * sniz[2] + 2 * sniz[0];
    e.target.innerText = zbir;
    writeData(e, fu);
  }
  function writeKent(e, ke) {
    let zbir = 0;
    let kontrola = 0;
    if (
      sniz[0] !== sniz[1] &&
      sniz[0] !== sniz[2] &&
      sniz[0] !== sniz[3] &&
      sniz[0] !== sniz[4] &&
      sniz[1] !== sniz[2] &&
      sniz[1] !== sniz[3] &&
      sniz[1] !== sniz[4] &&
      sniz[2] !== sniz[3] &&
      sniz[2] !== sniz[4] &&
      sniz[3] !== sniz[4]
    ) {
      kontrola = sniz.reduce((a, b) => {
        return a + b;
      }, 0);
      if (kontrola === 15 || kontrola === 20) zbir = kontrola;
    }
    e.target.innerText = zbir;
    writeData(e, ke);
  }
  function writePoker(e, po) {
    let zbir = 0;
    if (sniz[0] === sniz[1] && sniz[0] === sniz[2] && sniz[0] === sniz[3])
      zbir = sniz[0] * 4;
    if (sniz[0] === sniz[1] && sniz[0] === sniz[2] && sniz[0] === sniz[4])
      zbir = sniz[0] * 4;
    if (sniz[0] === sniz[1] && sniz[0] === sniz[3] && sniz[0] === sniz[4])
      zbir = sniz[0] * 4;
    if (sniz[0] === sniz[2] && sniz[0] === sniz[3] && sniz[0] === sniz[4])
      zbir = sniz[0] * 4;
    if (sniz[1] === sniz[2] && sniz[1] === sniz[3] && sniz[1] === sniz[4])
      zbir = sniz[1] * 4;
    e.target.innerText = zbir;
    writeData(e, po);
  }
  function writeJamb(e, ja) {
    let zbir = 0;
    if (
      sniz[0] === sniz[1] &&
      sniz[0] === sniz[2] &&
      sniz[0] === sniz[3] &&
      sniz[0] === sniz[4]
    )
      zbir = sniz[0] * 5;
    e.target.innerText = zbir;
    writeData(e, ja);
  }
  function createNums() {
    if (bacanje < 3) {
      setNiz((niz) =>
        niz.map((clan, i) => {
          if (clan !== 7) return (clan = Math.floor(Math.random() * 6 + 1));
          else return clan;
        })
      );
      console.log(niz);

      setBacanje((bacanje) => (bacanje += 1));
    } else alert("Искористили сте сва бацања");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img className="rotimage" src={grb} alt="грбић"></img>
      </header>
      <main>
        <div className="polje">
          <div className="dugme">
            <button onClick={createNums}>Баци коцке</button>
          </div>

          <Kocke
            className="bacene_kocke"
            onSetNiz={setNiz}
            onSetSniz={setsNiz}
            niz={niz}
            sniz={sniz}
          ></Kocke>
          <div>
            <table className="tabela">
              <thead>
                <tr>
                  <th className="rb">Доб</th>
                  <th className="rb">Дол</th>
                  <th className="rb">Сло</th>
                  <th className="rb">Гор</th>
                  <th className="rb">Нај</th>
                  <th className="rb">Руч</th>
                  <th className="rb">Ка с</th>
                  <th className="rb">Из с</th>
                  <th className="rb">Сума</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="rb">1</td>
                  <td
                    onClick={(e) => write1(e, 1)}
                    id="dole"
                    className="rb"
                  ></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">2</td>
                  <td
                    id="dole"
                    onClick={(e) => write1(e, 2)}
                    className="rb"
                  ></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">3</td>
                  <td
                    id="dole"
                    onClick={(e) => write1(e, 3)}
                    className="rb"
                  ></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">4</td>
                  <td
                    id="dole"
                    onClick={(e) => write1(e, 4)}
                    className="rb"
                  ></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">5</td>
                  <td
                    id="dole"
                    onClick={(e) => write1(e, 5)}
                    className="rb"
                  ></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">6</td>
                  <td
                    id="dole"
                    onClick={(e) => write1(e, 6)}
                    className="rb"
                  ></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">Сум</td>
                  <td id="dole_sum1" className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">Три</td>
                  <td
                    id="dole"
                    onClick={(e) => writeTriling(e, "tr")}
                    className="rb"
                  ></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">Кент</td>
                  <td
                    id="dole"
                    onClick={(e) => writeKent(e, "ke")}
                    className="rb"
                  ></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">Фул</td>
                  <td
                    id="dole"
                    onClick={(e) => writeFull(e, "fu")}
                    className="rb"
                  ></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">Покер</td>
                  <td
                    id="dole"
                    onClick={(e) => writePoker(e, "po")}
                    className="rb"
                  ></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">Јамб</td>
                  <td
                    id="dole"
                    onClick={(e) => writeJamb(e, "ja")}
                    className="rb"
                  ></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
                <tr>
                  <td className="rb">Сума</td>
                  <td id="dole" className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="rb">Резултат</td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb"></td>
                  <td className="rb">[ ]</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
// function Cell (func, number, children) {
//   return (
//   <td onClick={func}>{number}{children}</td> )
// }
export default App;
