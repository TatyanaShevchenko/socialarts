import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("Profile status class component", () => {

    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="test status"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test status");
    })


    test("after creation span should exist be displayed with correct status", () => {
        const component = create(<ProfileStatus status="test status"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    })

    test("after creation input should not exist", () => {
        const component = create(<ProfileStatus status="test status"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    })

    test("after creation span should display correct status", () => {
        const component = create(<ProfileStatus status="test status"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("test status");
    })

    test("input should be displayed istead of span in edit mode", () => {
        const component = create(<ProfileStatus status="test status"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input).not.toBeNull();
    })

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })

})
