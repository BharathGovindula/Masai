let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
};

for (let student in studentScores) {
    let score = studentScores[student];
    let grade;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log(`${student} - ${grade}`);
}
