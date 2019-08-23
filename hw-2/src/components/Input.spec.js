import React from "react";
import InputForm from "./Input";
import { mount, shallow } from "enzyme";

describe("<InputForm/>", () => {
  it("should render a InputForm", () => {
    const wrapper = shallow(<InputForm />);
    expect(wrapper).toMatchSnapshot();
  });

  //   it("should open a code editor", () => {
  //     const wrapper = mount(<InputForm code={code} />);
  //     expect(wrapper.find(".ReactCodeMirror")).toHaveLength(0);
  //     wrapper.find(".Button").simulate("click");
  //     expect(wrapper.find(".ReactCodeMirror")).toHaveLength(1);
  //   });
});
