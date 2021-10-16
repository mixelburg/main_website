import { mount } from "enzyme";
import * as React from "react";
import App from "./App";
import {setupIntersectionObserverMock} from "./util/ObserverMock";

describe("Main", () => {


    beforeEach(() => {
        setupIntersectionObserverMock()
    })

    it("renders without crashing", () => {
        mount(<App />);
    });


    it("renders Account header", () => {
        const wrapper = mount(<App />);
        expect(wrapper.find("#aboutme").exists()).toBeTruthy();
    });
})




