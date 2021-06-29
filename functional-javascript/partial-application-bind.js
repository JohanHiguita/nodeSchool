module.exports = function (namespace) {
    const fn = (...msg) => console.log(`${msg.join(" ")}`)
    return fn.bind(this, namespace)
}

/* Alternative solution */
module.exports = function (namespace) {
    return console.log.bind(console, namespace)
}

