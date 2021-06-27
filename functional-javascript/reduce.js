function countWords(inputWords) {
    return inputWords.reduce((prev,curr) => {
        if(prev[curr]){
            prev[curr]++;
        } else {
            prev[curr] = 1;
        }
        return prev;
    }, {})
  }

  module.exports = countWords