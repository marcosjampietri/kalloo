// __tests__/index.test.jsx
/**
 * @jest-environment jsdom
 */
import React from "react";
import { configure, shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new EnzymeAdapter() });

import Home from "../pages/index";

const findByTestAttr = (wrapper: any, val: string) =>
    wrapper.find(`[data-test='${val}']`);

it(" should render the Home page without errors", () => {
    const setup = () => shallow(<Home />);
    const wrapper = setup();
    const homeComp = findByTestAttr(wrapper, "comp-home");
    expect(homeComp.length).toBe(1);
});
