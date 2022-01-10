import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // console.log("ちゃす");
  const [num, setNum] = useState(0);
  const [FaceShowFlag, setFaceShowFlag] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
    // alert("ボタン押しました");
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!FaceShowFlag);
  };

  useEffect(() => {
    if (num % 5 === 0) {
      FaceShowFlag || setFaceShowFlag(true);
    } else {
      FaceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>イェーイ</h1>
      <ColorfulMessage color="blue">元気ですか？</ColorfulMessage>
      <ColorfulMessage color="red">元気です!</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {FaceShowFlag && <p>（　＾ω＾）</p>}
    </>
  );
};

export default App;
