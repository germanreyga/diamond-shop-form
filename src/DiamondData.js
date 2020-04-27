const SHAPE_PATH = "/assets/img/Forma";
const COLOR_PATH = "/assets/img/Color";
const CLAR_PATH = "/assets/img/Claridad";
const CUT_PATH = "/assets/img/Corte";
const CARAT_PATH = "/assets/img/Quilataje";

const shapeImgs = [
  `${SHAPE_PATH}/asscher.png`,
  `${SHAPE_PATH}/baguette.png`,
  `${SHAPE_PATH}/cojijn.png`,
  `${SHAPE_PATH}/corazon.png`,
  `${SHAPE_PATH}/esmeralda.png`,
  `${SHAPE_PATH}/marquesa.png`,
  `${SHAPE_PATH}/ovalo.png`,
  `${SHAPE_PATH}/pera.png`,
  `${SHAPE_PATH}/princesa.png`,
  `${SHAPE_PATH}/radiante.png`,
  `${SHAPE_PATH}/redondo.png`,
  `${SHAPE_PATH}/trillon.png`,
];

const shapeValues = [
  "asscher",
  "baguette",
  "cojijn",
  "corazon",
  "esmeralda",
  "marquesa",
  "ovalo",
  "pera",
  "princesa",
  "radiante",
  "redondo",
  "trillon",
];

const colorImgs = [
  `${COLOR_PATH}/amarillo-claro.png`,
  `${COLOR_PATH}/casi-incoloro.png`,
  `${COLOR_PATH}/incoloro.png`,
  `${COLOR_PATH}/ligeramente-amarillo.png`,
];

const colorValues = [
  "amarillo claro",
  "casi incoloro",
  "incoloro",
  "ligeramente amarillo",
];

const clarityImgs = [
  `${CLAR_PATH}/imperfecciones-10x.png`,
  `${CLAR_PATH}/imperfecciones-no-visibles.png`,
  `${CLAR_PATH}/imperfecciones-simple-vista.png`,
  `${CLAR_PATH}/perfecta.png`,
];

const clarityValues = [
  "imperfecciones visibles a 10x",
  "imperfecciones no visibles",
  "imperfecciones visibles a simple vista",
  "perfecta",
];

const cutImgs = [
  `${CUT_PATH}/bueno.png`,
  `${CUT_PATH}/excelente.png`,
  `${CUT_PATH}/muy-bueno.png`,
  `${CUT_PATH}/regular.png`,
];

const cutValues = ["bueno", "excelente", "muy bueno", "regular"];

const caratImgs = [`${CARAT_PATH}/pequeno.png`, `${CARAT_PATH}/grande.png`];

const caratValues = ["pequeño", "grande"];

export {
  shapeImgs,
  shapeValues,
  colorImgs,
  colorValues,
  clarityImgs,
  clarityValues,
  cutImgs,
  cutValues,
  caratImgs,
  caratValues,
};
