let scores = [50, 60, 70, 80, 75, 65, 77, 27, 35, 46];

let passed_count = 0;
for(let i = 0; i < scores.length; i++){
    if(scores[i] < 40){
        scores[i] += 20
    }
    if(scores[i] > 90){
        scores[i] = 90
    }
    if(scores[i] >= 50){
        passed_count++;
    }

}
console.log("Final Adjusted scores:", scores);
console.log("Number of students passed: " + passed_count);


