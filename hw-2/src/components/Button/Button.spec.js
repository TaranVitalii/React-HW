import React from "react";
import Button from "./Button";
import { shallow } from "enzyme";

describe("<Button/>", () => {
  it("should render a Button", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
  });
});
