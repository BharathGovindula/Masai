function createStudentManger(){
    let students = {};

    return{
        addStudent : function(id, name){
            if(!students[id]){
                students[id] = {name, subjects: {}};
            }
        },

        addSubject : function(id, subject, score){
            if(students[id]){
                students[id].subjects[subject] = score;
            }
        },

        updateScore : function(id, subject, score){
            if(students[id] && students[id].subjects.hasOwnProperty(subject)){
                students[id].subjects[subject] = score;
            }
        },

        getStudentDetails : function(id){
            return students[id] || "Student Not Found";
        },

        getSortedStudents : function(sortBy){
            return Object.values(students).map(student => {
                let scores = Object.values(student.subjects);
                let avgScore = scores.length ? scores.reduce((a, b)=> a + b, 0) / scores.length : 0;
                return {...student, avgScore};
            }).sort((a, b)=>{
                if(sortBy === "averageScore") return b.avgScore - a.avgScore;
                if(sortBy === "name") return a.name.localeCompare(b.name);
                return 0;
            });
        },

        generateInsights : function (){
            let insights = {
                topPerformers : [],
                difficultSubjects : {},
                failedStudents : [],
                subjectFrequency : {}
            };

            let studentData = Object.values(students).map(student =>{
                let scores = Object.entries(student.subjects);
                let avgScore = scores.length ? scores.reduce((acc, [_, score])=> acc + score, 0) / scores.length : 0;

                if(avgScore > 85) insights.topPerformers.push(student.name);
                if(scores.some(([_, score])=> score < 35)) insights.failedStudents.push(student.name);

                scores.forEach(([subject, score])=>{
                    insights.subjectFrequency[subject] = (insights.subjectFrequency[subject] || 0) + 1;
                });

                return {...student, avgScore};
            });

            let subjectCounts = {};
            studentData.forEach(student => {
                Object.entries(student.subjects).forEach(([subject, score]) => {
                    if(!subjectCounts[subject]) subjectCounts[subject] = {count:0, below40:0};
                    subjectCounts[subject].count++;
                    if(score < 40) subjectCounts[subject].below40++;
                });
            });

            Object.entries(subjectCounts).forEach(([subject, {count, below40}]) => {
                if(below40 / count > 0.5) insights.difficultSubjects[subject] = `${((below40 / count) * 100).toFixed(2)}% students scored below 40`;
            });

            return insights;
        }
    };
}

const manager = createStudentManger();
manager.addStudent(1, "Bharath");
manager.addStudent(2, "Nithin");

manager.addSubject(1, "Math", 90);
manager.addSubject(1, "Science", 95);
manager.addSubject(2, "Math", 30);
manager.addSubject(2, "Science", 80);
manager.updateScore(2, "Math", 33);

console.log(manager.getStudentDetails(1));
console.log(manager.getSortedStudents("averageScore"));
console.log(manager.generateInsights());