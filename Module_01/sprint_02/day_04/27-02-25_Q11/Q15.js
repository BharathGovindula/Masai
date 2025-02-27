function reverseUTraversal(N, matrix) {
    let result = [];
    
    // Traverse the first column from bottom to top
    for (let i = N - 1; i >= 0; i--) {
        result.push(matrix[i][0]);
    }
    
    // Traverse the first row from left to right (excluding first element)
    for (let j = 1; j < N; j++) {
        result.push(matrix[0][j]);
    }
    
    // Traverse the last column from top to bottom
    for (let i = 1; i < N; i++) {
        result.push(matrix[i][N - 1]);
    }
    
    // Include the bottom middle element if it exists
    if (N > 1) {
        result.push(matrix[N - 1][N - 2]);
    }
    
    console.log(result.join(" "));
}

// Example usage
let N = 3;
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

reverseUTraversal(N, matrix);
