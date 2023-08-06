import { describe, expect, it,  bench } from "vitest";

describe("benchmark",() => {
    const sayHello = (name: string) => `Hello ${name}` ;
    bench("should run benchmark", () => {
        const result = sayHello("Waltahh");
        expect(result).toBe("Hello Waltahh")

    })
})
