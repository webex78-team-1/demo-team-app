import { useState } from "react";

export default function Entry1() {
  const [ip, setIP] = useState(""); // グローバルIPアドレスを格納する変数
  const [region, setRegion] = useState(""); // 位置情報を格納する変数
  const [message, setMessage] = useState(""); // クリックしたら出現する文字列を格納する変数

  // IP Address APIからユーザーが使用している機器のグローバルIPアドレスを取得
  fetch("https://api.ipify.org/?format=json")
    .then((ipRes) => {
      return ipRes.json();
    })
    .then((ipData) => {
      setIP(ipData.ip);
    })
    .catch((ipError) => {
      console.error("Error fetching IP address data:", ipError);
    });

  // 先ほど取得したグローバルIPアドレスを基にIP Geolocation APIから位置情報を取得
  const fetchRegion = () => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_xXgxrTIfr1I8YG36JUYJ84np0nqO2&ipAddress=${ip}`
    )
      .then((regionRes) => {
        return regionRes.json();
      })
      .then((regionData) => {
        setRegion(regionData.location.region);
        setMessage("だよね。ずっと近くで見ていたよ。");
      })
      .catch((regionError) => {
        console.error("Error fetching Region data:", regionError);
      });
  };
  return (
    <div>
      <h1>追跡アプリ</h1>
      <div>下のボタンをクリックしてみてください。</div>
      <button onClick={fetchRegion} className="saying-button">
        クリック!!
      </button>
      <div>あなたが今いる場所は...</div>
      <div className="region-print">{region}</div>
      <div>{message}</div>
    </div>
  );
}
