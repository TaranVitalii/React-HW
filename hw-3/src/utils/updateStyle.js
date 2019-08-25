const styleUpdate = (styleProps, borderStyle) => {
  let updateStyle = { ...styleProps, ...borderStyle };
  return updateStyle;
};
export default styleUpdate;
