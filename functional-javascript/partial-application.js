var slice = Array.prototype.slice

function logger(namespace) {
    // SOLUTION GOES HERE
    return (...msg) => console.log(`${namespace} ${msg.join(" ")}`);
}

/* Alternative solution */
function logger2(namespace) {
    return function () {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
    }
}

module.exports = logger