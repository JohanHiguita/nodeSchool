function duckCount() {
    // SOLUTION GOES HERE
    const args = Array.prototype.slice.call(arguments);
    const withDuck = args.filter(obj => Object.hasOwnProperty.call(obj, 'quack')); 
    return withDuck.length;

    //console.log(arguments);
    //cosole.log(args);
}


//duckCount("johan", "test", {})
module.exports = duckCount