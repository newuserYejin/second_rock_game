import React from "react";

const Box = (props) => {
  console.log("props : ", props);
  console.log("props.color : ", props.color);
  const colorArray = {
    true: "green",
    false: "red",
  };

  return (
    <div className="user">
      <div>{props.userName}</div>
      <div className="imgBox">
        <img
          style={{
            borderColor:
              props.color != null ? colorArray[props.color] : "black",
          }}
          src={`../../../images/${props.imgName}.png`}
          alt="선택 사진"
        />
      </div>
      <div>{props.result}</div>
    </div>
  );
};

export default Box;
