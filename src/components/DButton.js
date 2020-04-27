import React from "react";

const DButton = (props) => {
  return (
    <button
      className={props.isSelected ? "d-btn active" : "d-btn"}
      onClick={() => {
        props.selectHandler(props.value);
      }}
    >
      <img src={process.env.PUBLIC_URL + props.img} alt={props.value} />
      <br />
      <div style={{ fontFamily: "NunitoSans" }}>
        {props.value.toUpperCase()}
      </div>
    </button>
  );
};

export default DButton;
