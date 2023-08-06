import {assert, describe, expect, it } from "vitest";

const sayHello = (name: string) : string => `Hello ${name}` 

describe("sayHello", () => {
    it("should return string name", () => {
        expect(sayHello("Waltahh")).to.be.a('string', "Hello Waltahh")
        assert.equal(sayHello("wal"), 'Hello wal')
    })
})