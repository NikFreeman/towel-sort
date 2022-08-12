// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.map((x, i) => (i % 2 === 0 ? x : x.reverse())).flat();
};
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// towelSort(matrix);
