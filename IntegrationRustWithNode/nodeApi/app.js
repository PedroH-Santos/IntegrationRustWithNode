/* COM NEON E NODE API RECURSOS C++ */
const addon = require("../neonRust/project/index.node");
console.log("NEON: " + addon.factorial(20));


/* COM FFI */
const ffi = require("ffi");

const { factorial } = ffi.Library("./librustffi.rlib", {
    'factorial' : ['uint64', ['uint64']],
});

console.log("FFI: " + factorial(20));