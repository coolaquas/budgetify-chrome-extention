// Function for converting into searable string
exports.fixedEncodeURI = function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}