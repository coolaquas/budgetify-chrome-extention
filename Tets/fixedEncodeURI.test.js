const ext = require("./fixedEncodeURI");

test('no.1 test for fixedEncodeURI function.',() => {
    expect(ext.fixedEncodeURI(" ")).toEqual("%20");    
})
test('no.2 test for fixedEncodeURI function.',() => {
    expect(ext.fixedEncodeURI("Samrat")).toEqual("Samrat");    
})
test('no.3 test for fixedEncodeURI function.',() => {
    expect(ext.fixedEncodeURI(" ")).not.toEqual(" ");    
})












