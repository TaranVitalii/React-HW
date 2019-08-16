import React from "react";
import InputForm from "./Input";
import { shallow } from "enzyme";

describe("<InputForm/>", () => {
  it("1st test", () => {
    const wrapper = shallow(<InputForm />);
    const value = wrapper.find(".inputForm");
    const button = wrapper.find(".button").simulate("click");
    console.log(value);
    expect(value).toEqual(undefined);
  });
});
