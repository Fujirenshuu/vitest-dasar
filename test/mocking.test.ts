import { describe, expect, it, vi } from "vitest";

describe("mock", () => {
    const sayHello = (name: string, callback: (message: string) => void) => {
        callback(`Hello ${name}`);
    };
    
    it("should support mock", () => {
        const callback = vi.fn()
        sayHello("Waltahh", callback)
        expect (callback).toHaveBeenCalledWith("Hello Waltahh")    
    })

})