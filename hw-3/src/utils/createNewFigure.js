export default function createNewFigure(elementsFigure) {
  const nextCount = elementsFigure.length;
  const plusNewElementsFigure = [...elementsFigure, nextCount];
  return plusNewElementsFigure;
}
