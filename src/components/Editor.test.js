const Editor = require("./Editor")

// @ponicode
describe("handleKeyCommand", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Jean-Philippe", "Jean-Philippe"], ["George", "Michael", "Anas"], ["Anas", "George", "Edmond"]]
        inst = new Editor.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleKeyCommand("generate bluetooth firewall", "Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleKeyCommand("generate bluetooth firewall", "Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleKeyCommand("synthesize wireless microchip", "Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleKeyCommand("transmit bluetooth bus", "Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleKeyCommand("parse mobile firewall", "Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleKeyCommand(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_onBoldClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Pierre Edouard", "Pierre Edouard"], ["George", "Jean-Philippe", "Michael"], ["Pierre Edouard", "Pierre Edouard", "Jean-Philippe"]]
        inst = new Editor.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst._onBoldClick()
        }
    
        expect(callFunction).not.toThrow()
    })
})
