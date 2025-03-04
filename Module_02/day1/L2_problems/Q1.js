function circularTraversal(N, matrix){
    let res = [];

    for(i=N-1; i>=0; i--){
        res.push(matrix[i][0]);
    }

    for(let j=1;j<N; j++){
        res.push(matrix[0][j]);
    }

    for(let i=1; i<N; i++){
        res.push(matrix[i][N-1]);
    }

    res.push(matrix[N-1][N-2]);

    console.log(res.join(" "));

}

let N=3;
let matrix= [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
];
circularTraversal(N, matrix);