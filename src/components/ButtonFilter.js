import React from "react";
import DButton from "./DButton";

const ButtonFilter = (props) => {
  const images = props.imgs;
  const selectHandler = props.selectHandler;
  const values = props.values;
  const selected = props.selectedOption;
  const style = props.fstyle;
  const label = props.labelName;

  const listImages = images.map((path, index) => (
    <DButton
      key={index}
      img={path}
      selectHandler={selectHandler}
      value={values[index]}
      isSelected={values[index] === selected ? true : false}
    />
  ));

  return (
    <div>
      <div>{label}</div>
      <div className={style}>{listImages}</div>
    </div>
  );
};

export default ButtonFilter;
