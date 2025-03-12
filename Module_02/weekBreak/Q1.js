// An online learning platform tracks students' progress.

// Requirements:
// const studentsProgress = [
//   { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
//   { name: "Sita", completedLessons: 25, totalLessons: 50 },
//   { name: "Manoj", completedLessons: 30, totalLessons: 60 },
//   { name: "Pooja", completedLessons: 48, totalLessons: 50 },
//   { name: "Anil", completedLessons: 15, totalLessons: 50 }
// ];
// Implement the following logic:
// Filter students who have completed at least 50% of the course.
// Map to calculate their completion percentage.
// Reduce to find the average completion percentage of all active students.
// Filter students who have more than 80% completion to get a list of top learners.
// Expected Output:
// List of active students with their completion percentage.
// The average course completion percentage.
// Submission Guidelines
// Implement the solution and ensure that it runs without errors.

// Include comments in your code to explain the logic and flow.



const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
    { name: "Sita", completedLessons: 25, totalLessons: 50 },
    { name: "Manoj", completedLessons: 30, totalLessons: 60 },
    { name: "Pooja", completedLessons: 48, totalLessons: 50 },
    { name: "Anil", completedLessons: 15, totalLessons: 50 }
  ];

  // Filter students who have completed at least 50% of the course
  
  const activeStudents = studentsProgress.filter(student => 
    student.completedLessons / student.totalLessons >= 0.5);
  
  // Map to calculate their completion percentage

  const completionPercentages = activeStudents.map(student => ({
    name: student.name,
    completionPercentage: (student.completedLessons / student.totalLessons) * 100
  }));

  // Reduce to find the average completion percentage of all active students
 
  const averageCompletionPercentage = completionPercentages.reduce((total, student) => 
    total + student.completionPercentage, 0) / completionPercentages.length;
  
  // Filter students who have more than 80% completion to get a list of top learners
  
  const topLearners = completionPercentages.filter(student => student.completionPercentage > 80);

  console.log("Active Students with Completion Percentage:", completionPercentages);
  console.log("Average completion percentage:", averageCompletionPercentage);
  console.log("Top learners:", topLearners);
