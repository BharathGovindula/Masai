function greatest(num1, num2, num3) {
    let greatest = num3>(num1>num2?num1:num2)?num3:(num1>num2?num1:num2);
    return greatest;
}
console.log(greatest(100, 80, 70));
console.log(greatest(10, 80, 70));