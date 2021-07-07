module.exports = function arrayMap(arr, fn) {
    return arr.reduce((prev,curr) => {
        const val = fn(curr)
        prev.push(val)
        return prev;
    }, [])
  }