
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    const vertLetters = transpose(letters)
    if (vertLetters) {
        const verticalJoin = vertLetters.map(ls => ls.join(''))
        for (l of verticalJoin) {
            if (l.includes(word)) {
                return true
            }
        }
    }
    return false
}

const transpose = function (letters) {
    let dimY = letters.length;
    let dimX = letters[0].length;
    let rowArray = [];
    for (let y = 0; y < dimY; y++) {
        for (let x = 0; x < dimX; x++) {
            if (y === 0) {
                rowArray.push([]);
            }
            rowArray[x].push(letters[y][x]);
        }
    }
    return rowArray;
};

const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'R', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'R', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'A', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'N', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'K', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK')
console.log(result)



module.exports = wordSearch;