import React from "react";

const Box = (props) => {
  console.log("props : ", props);
  return (
    <div className="user">
      <div>{props.userName}</div>
      <div className="imgBox">
        <img src={`../../../images/${props.imgName}.png`} alt="선택 사진" />
      </div>
      <div>{props.result}</div>
    </div>
  );
};

export default Box;
