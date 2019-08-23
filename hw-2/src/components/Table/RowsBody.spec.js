import React from "react";
import RowsBody from "./RowsBody";
import { shallow } from "enzyme";

describe("<RowsBody/>", () => {
  it("should render a RowsBody", () => {
    const wrapper = shallow(<RowsBody />);

    expect(wrapper).toMatchSnapshot();
  });
  it("should render a document title", () => {
    let toBe = {
      children: [<td>festal</td>, <td>Jest</td>]
    };
    const wrapper = shallow(<RowsBody name="festal" value="Jest" />);
    expect(wrapper.props("name")).toStrictEqual(toBe);
  });
});
