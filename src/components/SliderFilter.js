import React, { useState, useEffect } from "react";
import InputRange from "react-input-range";
import { Row, Col } from "react-bootstrap";

const SliderFilter = (props) => {
  const label = props.labelName;
  const changeRange = props.selectHandler;
  const isReloaded = props.isReloaded;
  const type = props.sType;

  const [caratRange, setCaratRange] = useState({
    min: props.min,
    max: props.max,
  });

  useEffect(() => {
    changeRange(caratRange);
  }, [caratRange, changeRange]);

  return (
    <>
      <div>{label}</div>
      {props.imgs !== undefined ? (
        <Row>
          <Col xs={6}>
            <img
              className="float-left align-bottom"
              style={{ bottom: 0, position: "absolute" }}
              src={props.imgs[0]}
              alt={props.values[0]}
            />
          </Col>
          <Col xs={6}>
            <img
              className="float-right align-bottom"
              src={props.imgs[1]}
              alt={props.values[1]}
            />
          </Col>
        </Row>
      ) : (
        <React.Fragment></React.Fragment>
      )}

      <InputRange
        formatLabel={(_) => ""}
        minValue={props.min}
        value={{ min: caratRange.min, max: caratRange.max }}
        maxValue={props.max}
        step={type === "price" ? 1 : 0.5}
        onChange={(value) => setCaratRange({ min: value.min, max: value.max })}
      />
      <Row>
        <Col xs={6}>
          <input
            className="form-control range-inp float-left"
            type={"text"}
            id="min"
            name="min"
            min={props.min}
            value={
              type === "price"
                ? "$" + caratRange.min.toLocaleString()
                : caratRange.min
            }
            max={props.max}
            readOnly
          />
        </Col>
        <Col xs={6}>
          <input
            className="form-control range-inp float-right"
            type={"text"}
            id="max"
            name="max"
            min={props.min}
            value={
              type === "price"
                ? "$" + caratRange.max.toLocaleString()
                : caratRange.max
            }
            max={props.max}
            readOnly
          />
        </Col>
      </Row>
    </>
  );
};

export default SliderFilter;
