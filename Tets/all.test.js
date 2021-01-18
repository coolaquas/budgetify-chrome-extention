const ext1 = require("./all");
test('no.1 test for All testing.', () => {
    let testArray = ["", "Samrat", "Samrat Mallick", 1, 123, " ", 1.2, -1, "123"]
    testArray.forEach(myFunction);

    function myFunction(item) {
        if(typeof(item) == NaN){
            expect(ext1.fixedEncodeURI(item)).not.toEqual(item);
        } else {
            expect(ext1.isInt(item)).not.toEqual(item);
        }
    }
})