import React, { useState } from "react";
import ButtonFilter from "./ButtonFilter";
import SliderFilter from "./SliderFilter";
import * as data from "../DiamondData";
import { Container, Row, Col } from "react-bootstrap";

const DiamondStore = () => {
  const [shape, setShape] = useState("none");
  let shapeButtonsImgs = data.shapeImgs;
  let shapeButtonsValues = data.shapeValues;

  const [color, setColor] = useState("none");
  let colorButtonsImgs = data.colorImgs;
  let colorButtonsValues = data.colorValues;

  const [clarity, setClarity] = useState("none");
  let clarityButtonsImgs = data.clarityImgs;
  let clarityButtonsValues = data.clarityValues;

  const [cut, setCut] = useState("none");
  let cutButtonsImgs = data.cutImgs;
  let cutButtonsValues = data.cutValues;

  const [caratRange, setCaratRange] = useState("none");
  let caratImgs = data.caratImgs;
  let caratValues = data.caratValues;

  const [priceRange, setPriceRange] = useState("none");

  const [loaded, setLoaded] = useState({ min: 0, max: 30 });

  function onShapeSelect(shapeValue) {
    setShape(shapeValue);
  }

  function onColorSelect(colorValue) {
    setColor(colorValue);
  }

  function onClaritySelect(colorValue) {
    setClarity(colorValue);
  }

  function onCutSelect(cutValue) {
    setCut(cutValue);
  }

  function onCaratSelect(caratRange) {
    setCaratRange(caratRange);
  }

  function onPriceSelect(priceRange) {
    setPriceRange(priceRange);
  }

  function sendForm() {
    const data = {
      shape: shape,
      color: color,
      clarity: clarity,
      cut: cut,
      caratRange: caratRange,
      priceRange: priceRange,
    };

    console.dir(data);
    window.alert("DATOS:\n" + JSON.stringify(data));
  }

  function cleanForm() {
    setShape("none");
    setColor("none");
    setClarity("none");
    setCut("none");
    setCaratRange("none");
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Row>
            <Col md={12}>
              <ButtonFilter
                imgs={shapeButtonsImgs}
                selectHandler={onShapeSelect}
                values={shapeButtonsValues}
                selectedOption={shape}
                fstyle={"shape-filter"}
                labelName={"Forma"}
              />
            </Col>

            <Col md={12}>
              <ButtonFilter
                imgs={colorButtonsImgs}
                selectHandler={onColorSelect}
                values={colorButtonsValues}
                selectedOption={color}
                fstyle={"color-filter"}
                labelName={"Color"}
              />
            </Col>
            <Col md={12}>
              <ButtonFilter
                imgs={clarityButtonsImgs}
                selectHandler={onClaritySelect}
                values={clarityButtonsValues}
                selectedOption={clarity}
                fstyle={"clarity-filter"}
                labelName={"Claridad"}
              />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={12}>
              <ButtonFilter
                imgs={cutButtonsImgs}
                selectHandler={onCutSelect}
                values={cutButtonsValues}
                selectedOption={cut}
                fstyle={"cut-filter"}
                labelName={"Corte"}
              />
            </Col>
            <Col md={12}>
              <SliderFilter
                min={loaded.min}
                max={loaded.max}
                loaded={loaded}
                labelName={"Quilataje"}
                imgs={caratImgs}
                values={caratValues}
                selectHandler={onCaratSelect}
                sType={"number"}
              />
            </Col>
            <Col md={12}>
              <SliderFilter
                min={loaded.min}
                max={loaded.max}
                loaded={loaded}
                labelName={"Precio"}
                selectHandler={onPriceSelect}
                sType={"price"}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row className="text-center">
        <Col md={6}>
          <button
            className="btn btn-sm btn-primary btn-buscar"
            onClick={() => sendForm()}
          >
            BUSCAR
          </button>
        </Col>
        <Col md={6}>
          <button
            className="btn btn-sm btn-secondary btn-clean"
            onClick={() => cleanForm()}
          >
            LIMPIAR FILTROS
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default DiamondStore;
