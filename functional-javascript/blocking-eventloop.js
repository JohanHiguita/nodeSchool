function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return;
    operation();
    return new Promise((resolve, reject) => {
        resolve(repeat(operation, --num))
    });
    //return repeat(operation, --num)
}

module.exports = repeat

