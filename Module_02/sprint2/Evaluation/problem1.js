// Develop a robust Student Performance Analysis System that efficiently manages student data, tracks academic performance, and generates meaningful insights using JavaScript Objects, Object Methods, and In-Built Methods.

// Problem Statement
// You are tasked with developing a Student Performance Analysis System for a school. The system should manage student data securely, track their performance across multiple subjects, and generate insightful reports.

// Key Requirements
// Implement a function called createStudentManager() that securely manages student data using closures for data privacy.
// The function should return the following methods:
// addStudent – Adds a new student with the following structure:
// updateScore – Updates a student’s score for a given subject.
// getStudentDetails – Retrieves details of a specific student. If the student doesn’t exist, return "Student Not Found".
// addSubject – Adds a new subject for a student with its score.
// The system should generate the following insights:
// Calculate the average score for each student.
// Identify students with an average score above 85 as top performers.
// Identify subjects in which more than 50% of the students have scored below 40 (considered difficult subjects).
// Identify students who have failed in at least one subject (score below 35).
// Display a frequency map that shows how many students are enrolled in each subject.
// Use the following concepts effectively:
// Implement Object.keys(), Object.values(), and Object.entries() for key-value manipulations.
// Use .map(), .filter(), .reduce(), and .forEach() for efficient data manipulation and report generation.
// Add a method getSortedStudents(sortBy) that sorts students by:
// "averageScore"
// "name" (alphabetically)
// Deliverables:
// Implementation
// JavaScript code implementing the createStudentManager() function with the following methods:
// addStudent
// updateScore
// getStudentDetails
// addSubject
// getSortedStudents()
// Insights generation logic that includes:
// Average score calculation for each student.
// Identification of top performers (average score above 85).
// Identification of difficult subjects (where more than 50% of students score below 40).
// Identification of students who have failed in at least one subject.
// Generation of a frequency map showing subject-wise student counts.
// Correct Usage of Concepts
// Clear and effective use of:
// Closures to ensure data privacy.
// Object.keys(), Object.values(), and Object.entries() for object manipulations.
// .map(), .filter(), .reduce(), and .forEach() for data transformation and insights generation.



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