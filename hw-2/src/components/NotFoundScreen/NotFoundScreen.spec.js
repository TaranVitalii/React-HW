import React from "react";
import NotFoundScreen from "./NotFoundScreen";
import { shallow } from "enzyme";

describe("<NotFoundScreen/>", () => {
  it("should render a not found screen", () => {
    const wrapper = shallow(<NotFoundScreen />);

    expect(wrapper).toMatchSnapshot();
  });
});
