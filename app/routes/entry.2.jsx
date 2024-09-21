import { useState } from "react";
import "../styles/entry2.css";

export default function Entry2() {
  const [foxImages, setFoxImages] = useState([]); // 狐の画像を保持する配列の宣言
  const [count, setCount] = useState(1); // 初期カウンタ値

  // カウントで指定した数だけ狐の画像を取得する
  const fetchFoxImages = () => {
    let images = [];

    // 写真を保持しておく配列の初期化
    setFoxImages([]);

    for (let i = 0; i < count; i++) {
      fetch("https://randomfox.ca/floof/")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          images.push(data.image); // APIから取得した画像を配列に追加

          // 指定した数の画像がすべて取得できたら, foxImagesを更新
          if (images.length === count) {
            setFoxImages(images);
          }
        });
    }
  };

  // カウンタが変更されたときの処理
  const countChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <>
      <h1>エントリー2</h1>
      <div className="container">
        <div className="content-title">
          <img
            src="../public/images/shadowfox.jpg"
            alt="狐のロゴ"
            className="fox-logo"
          ></img>
          <h1>Fox Image Generator</h1>
          <img
            src="../public/images/shadowfox.jpg"
            alt="狐のロゴ"
            className="fox-logo"
          ></img>
        </div>
        <div>狐の画像をランダムに表示するよ！１～１０枚まで表示できるよ！</div>
        <input
          type="number"
          value={count}
          onChange={countChange}
          className="counter"
          min="1"
          max="10"
        />
        <button onClick={fetchFoxImages} className="button">
          画像を表示する！
        </button>
        <div className="image-container">
          {foxImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="狐待機中..."
              className="fox-image"
              style={{ width: "200px", height: "200px", margin: "10px" }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
