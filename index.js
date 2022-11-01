function receivesAFunction(callback) {
    return callback();
    } 

function returnsANamedFunction() {
    return  function fn() {console.log ("Hello")}
}

function returnsAnAnonymousFunction() {
    return function () {}; 
}