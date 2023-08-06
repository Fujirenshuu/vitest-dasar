import { describe, expect, it, } from "vitest";
import { sayHello } from '../src/say-hello';

describe("sayHello", () => {
    it("should return say hello", () => {
        const result = sayHello("Waltahh")
        expect(result).toBe("Hello Waltahh")
    })
})