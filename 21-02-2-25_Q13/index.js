let tasks = [
    "Complete project report",
    "Attend team meeting",
    "Review pull requests",
    "Update documentation",
    "Plan next sprint"
];

// Remove the first task
for (let i = 0; i < tasks.length - 1; i++) {
    tasks[i] = tasks[i + 1];
}
tasks.length = tasks.length - 1;

// Add two high-priority tasks at the beginning
let newTasks = ["Fix critical bug", "Prepare presentation"];
tasks = [...newTasks, ...tasks];

// Replace the last task with a new task
tasks[tasks.length - 1] = "Conduct code review";

// Log the updated task list
console.log(tasks);