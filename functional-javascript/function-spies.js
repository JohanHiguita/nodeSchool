function Spy(target, method) {
    // SOLUTION GOES HERE
    const original = target[method];
    
    let spy = {
        "count":0
    }

    target[method] = function() {
        spy.count++;
        return original.apply(this, arguments);
    }

    return spy;
}


module.exports = Spy