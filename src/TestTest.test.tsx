import {mount, shallow} from "enzyme";
import * as React from "react";
import axios from "axios"
import {TestTest} from "./TestTest";
import { waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import mock = jest.mock;

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Main", () => {
    let wrapper: any

    // clear all mocks
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render loading when loading', function () {
        wrapper = shallow(<TestTest/>)
        expect(wrapper.find("div").first().text()).toBe("loading");
    });


    it('should do it', async () => {
        // mockedAxios.get.mockImplementation((url: string) => {
        //     switch (url) {
        //         case "vm":
        //             return Promise.resolve({ data: "hello"} )
        //         default:
        //             return Promise.resolve({ data: "error"} )
        //     }
        // } );
        // @ts-ignore

        await act(async () => {
            mockedAxios.get.mockResolvedValueOnce({ data: "hello"} )

            wrapper = mount(<TestTest/>)
        })

        wrapper!.update()

        await expect(mockedAxios.get).toHaveBeenCalledWith("vm")
        await expect(mockedAxios.get).toHaveBeenCalledTimes(1)

        expect(wrapper.find("div#fuckyea")).toHaveLength(1)
    });

})

