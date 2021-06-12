const arr = process.argv.slice(2);

const sum = arr.reduce((acc, curr) => {
    return acc + +curr;
},0)

console.log(sum);
