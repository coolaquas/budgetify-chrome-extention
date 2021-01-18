 const ext = require("./isInt");

test('no.1 test for isInt function.',() => {
    expect(ext.isInt(1)).toEqual(true);    
})
test('no.2 test for isInt function.',() => {
    expect(ext.isInt()).toEqual(false);    
})
test('no.3 test for isInt function.',() => {
    expect(ext.isInt(2.1)).toEqual(false);    
})
test('no.4 test for isInt function.',() => {
    expect(ext.isInt(0)).toEqual(true);    
})
test('no.5 test for isInt function.',() => {
    expect(ext.isInt(-1)).toEqual(true);    
})
test('no.6 test for isInt function.',() => {
    expect(ext.isInt("Samrat")).toEqual(false);    
})
test('no.7 test for isInt function.',() => {
    expect(ext.isInt("")).toEqual(false);    
})
test('no.8 test for isInt function.',() => {
    expect(ext.isInt( )).toEqual(false);    
})

test('no.9 test for isInt function.',() => {
    expect(ext.isInt("a"+0)).toEqual(false);    
})
test('no.10 test for isInt function.',() => {
    expect(ext.isInt(0 + "a")).toEqual(false);    
})











