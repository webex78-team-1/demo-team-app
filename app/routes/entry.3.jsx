import { useState } from "react";

export default function Entry3() {
  let [left, setLeft] = useState(0);
  const [ope, setOpe] = useState(null);
  let [ans, setAns] = useState(null);

  function keyPressed(key) {
    setLeft(left * 10 + key);
  }

  function opeKeyPressed(key) {
    setOpe(key);
  }

  function equalKeyPressed() {
    if (ope === "/2") {
      setAns(left / 2);
    } else if (ope === "*3+1") {
      setAns(left * 3 + 1);
    }
  }

  return (
    <>
      <h1>エントリー3</h1>
      <h2>コラッツ予想体験</h2>
      <p>コラッツ予想とは・・・</p>
      <p>
        任意の正の整数 n に対し、 n が偶数の時は n/2 、 n が奇数の時は 3n+1
        の操作を繰り返した時、有限回の繰り返しで必ず 1 に到達するというもの。
      </p>
      <div className="display">{ans === null ? left : (left = ans)}</div>
      <div className="input">
        <div className="numbers">
          <button
            onClick={() => {
              keyPressed(0);
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              keyPressed(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              keyPressed(2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              keyPressed(3);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              keyPressed(4);
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              keyPressed(5);
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              keyPressed(6);
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              keyPressed(7);
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              keyPressed(8);
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              keyPressed(9);
            }}
          >
            9
          </button>
        </div>
        <div className="operators">
          <button
            onClick={() => {
              opeKeyPressed("/2");
            }}
          >
            ２で割る
          </button>
          <button
            onClick={() => {
              opeKeyPressed("*3+1");
            }}
          >
            ３をかけて１を足す
          </button>
          <button
            onClick={() => {
              equalKeyPressed();
            }}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}
