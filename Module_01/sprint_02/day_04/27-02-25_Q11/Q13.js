function printZigZagMatrix(N, M, matrix) {
    let result = [];
    for (let i = 0; i < N; i++) {
        if (i % 2 === 0) {
            // Traverse from right to left
            for (let j = M - 1; j >= 0; j--) {
                result.push(matrix[i][j]);
            }
        } else {
            // Traverse from left to right
            for (let j = 0; j < M; j++) {
                result.push(matrix[i][j]);
            }
        }
    }
    console.log(result.join(" "));
}

// Example usage
let N = 4, M = 5;
let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [3, 2, 5, 4, 6],
    [7, 8, 9, 1, 2]
];

printZigZagMatrix(N, M, matrix);