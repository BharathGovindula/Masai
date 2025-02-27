function print2DArray(N, M, arr) {
    for (let i = 0; i < N; i++) {
        console.log(arr[i].join(" "));
    }
}

// Example usage
let N = 3, M = 2;
let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

print2DArray(N, M, arr);
