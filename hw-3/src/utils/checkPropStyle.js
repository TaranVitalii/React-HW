const checkStyleProps = (state, props) => {
  if (state) {
    let style = state;
    return style;
  } else {
    let style = props;
    return style;
  }
};
export default checkStyleProps;
