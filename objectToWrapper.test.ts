import {assert} from "chai"
import objectToWrapper from "./objectToWrapper.js"

describe("objectToWrapper Test Suite", () => {
    it("should return empty wrapper", () => {
        const wrapper = objectToWrapper({})
        assert.deepEqual(wrapper, {})
    })
    it("should return wrapper with one property", () => {
        const wrapper = objectToWrapper({
            foo: "bar"
        })
        assert.deepEqual(wrapper, {
            foo: "bar"
        })
    })
    it("should return wrapper with two properties", () => {
        const wrapper = objectToWrapper({
            foo: "bar",
            bar: "foo"
        })
        assert.deepEqual(wrapper, {
            foo: "bar",
            bar: "foo"
        })
    })
    it("should return wrapper with three string properties, no numbers", () => {
        const wrapper = objectToWrapper({
            foo: 1,
            bar: 2,
            spam: "eggs"
        })
        assert.deepEqual(wrapper, {
            foo: "1",
            bar: "2",
            spam: "eggs"
        })
    })
    it("should return wrapper with all string properties", () => {
        const wrapper = objectToWrapper({
            foo: true,
            bar: 3.5,
            spam: null,
            eggs: "spam"
        })
        assert.deepEqual(wrapper, {
            foo: "true",
            bar: "3.5",
            spam: "",
            eggs: "spam"
        })
    })
})