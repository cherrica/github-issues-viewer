import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Auth Input Component", () => {
  describe("user authorization", () => {
    describe("when there is no auth token set", () => {
      test("it renders the authInput Component", () => {
        let props = { authToken: "" };
        const wrapper = shallow(<App {...props} />);
        expect(wrapper.find("Connect(AuthInput)").exists()).toBe(true);
      });
    });

    describe("when there is an auth token set", () => {
      test("it does not render the authInput Component", () => {
        let props = { authToken: "abc" };
        const wrapper = shallow(<App {...props} />);
        expect(wrapper.find("Connect(AuthInput)").exists()).toBe(false);
      });
    });
  });
});
