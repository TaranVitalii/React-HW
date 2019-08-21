import React from "react";
import UserIdInput from "./UserIdInput";
import { shallow } from "enzyme";

describe("<InputForm/>", () => {
  it("should render a UserId Input", () => {
    const wrapper = shallow(<UserIdInput />);

    expect(wrapper).toMatchSnapshot();
  });
  it("should pass a selected value to the onChange handler", () => {
    const value = 2;
    const onChange = jest.fn();
    const wrapper = shallow(<UserIdInput onChange={onChange} />);

    expect(wrapper).toMatchSnapshot();

    wrapper.find(".inputForm").simulate("change", {
      target: { value }
    });

    expect(onChange).toBeCalledWith(value);
  });
});
