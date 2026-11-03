import { sayHello } from "../src/say-hello.js";
describe('Hello', function () {
    it("should say hello", function () {
        const name = "Hello syarifah";
        expect(name).toBe("Hello syarifah");
    });
    it("should return hello with name", function () {
        expect(sayHello("syarifah")).toBe("Hello syarifah");
    });
});
//# sourceMappingURL=hello.test.js.map