import { useEffect, useState } from "react";
import "./App.css";
import Box from "./component/Box.jsx";

function App() {
  // 사용자 선택 값
  const [select, setSelect] = useState(null);

  // 사진 배열
  const images = ["rock", "scissors", "paper"];

  // 사진 인덱스
  const [imgNum, setImgNum] = useState(0);

  //컴퓨터 값
  const [comSelect, setComSelect] = useState(null);

  // 결과
  const [result, setResult] = useState(null);

  // 선 색
  const [color, setColor] = useState(null);

  useEffect(() => {
    console.log("사용자의 선택 : ", select);
    if (select == null) {
      const timer = setInterval(() => {
        setImgNum((prev) => (prev + 1) % images.length);
      }, 300);

      return () => clearInterval(timer);
    } else {
      const randomNum = Math.floor(Math.random() * images.length);
      setComSelect(randomNum);

      console.log("컴퓨터 선택 값 : ", randomNum);
      console.log("사용자 선택 값 : ", select);

      judgment(select, randomNum);
    }
  }, [select]);

  const judgment = (user, computer) => {
    // 가위 : 1, 바위 : 0. 보 : 2

    if (computer == user) {
      setResult("tie");
      return;
    }

    if (computer == 0) {
      return user == 1 ? setResult("lose") : setResult("win");
    } else if (computer == 1) {
      return user == 0 ? setResult("win") : setResult("lose");
    } else if (computer == 2) {
      return user == 0 ? setResult("lose") : setResult("win");
    }
  };

  useEffect(() => {
    console.log("색상결정 : ", result);
    if (result == null || result == "tie") {
      setColor(null);
    } else if (result == "win") {
      setColor(true);
    } else if (result == "lose") {
      setColor(false);
    }
  }, [result]);

  function setGame() {
    setSelect(null);
    setImgNum(0);
    setComSelect(null);
    setResult(null);
  }

  useEffect(() => {
    console.log("승부의 결과 : ", result);
  }, [result]);

  return (
    <div className="wholeContainer">
      <div>
        <Box
          userName="computer"
          imgName={comSelect == null ? images[imgNum] : images[comSelect]}
          result={
            result == null
              ? "result"
              : result == "tie"
              ? result
              : result == "win"
              ? "lose"
              : "win"
          }
          color={color != null ? !color : null}
        ></Box>

        <Box
          userName="user"
          imgName={select == null ? "question" : images[select]}
          result={result == null ? "result" : result}
          color={color != null ? color : null}
        ></Box>
      </div>

      <div className="btns">
        <input
          type="radio"
          name="userSelect"
          checked={select == 1 ? true : false}
          id="s"
          onChange={() => setSelect(1)}
          disabled={select == null ? false : true}
        />
        <label htmlFor="s">가위</label>
        <input
          type="radio"
          name="userSelect"
          checked={select == 0 ? true : false}
          id="r"
          onChange={() => setSelect(0)}
          disabled={select == null ? false : true}
        />
        <label htmlFor="r">바위</label>
        <input
          type="radio"
          name="userSelect"
          checked={select == 2 ? true : false}
          id="p"
          onChange={() => setSelect(2)}
          disabled={select == null ? false : true}
        />
        <label htmlFor="p">보</label>
      </div>

      <div className="resetGame" onClick={setGame}>
        다시하기
      </div>
    </div>
  );
}

export default App;
