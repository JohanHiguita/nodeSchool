function reduce(arr, fn, initial) {
    if(!arr.length) {
        return initial;
    } else {
        let head = arr[0];
        const tail = arr.slice(1);
        const acc = fn(initial,head)
        return reduce(tail,fn,acc)
    }
}

module.exports = reduce

/* const arr = [3,2,9];

const r = reduce(arr,(acc, curr) => acc + curr,0);

console.log(r) */;