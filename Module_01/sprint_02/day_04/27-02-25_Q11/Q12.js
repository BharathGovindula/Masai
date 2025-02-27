function printIndexSum(N, M) {
    for (let i = 0; i < N; i++) {
        let row = [];
        for (let j = 0; j < M; j++) {
            row.push(i + j);
        }
        console.log(row.join(" "));
    }
}

// Example usage
let N = 3, M = 2;
printIndexSum(N, M);
