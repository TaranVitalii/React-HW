export default function withoutDestroyElement(elem, array) {
  const result = array.filter(item => item !== elem);
  return result;
}
