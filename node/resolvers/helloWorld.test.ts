import * as helloWorld from "./helloWorld"
// @ponicode
describe("helloWorld.helloWorld", () => {
    test("0", () => {
        let callFunction: any = () => {
            helloWorld.helloWorld()
        }
    
        expect(callFunction).not.toThrow()
    })
})
