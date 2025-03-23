const TaskManager = (function (){

    let tasks = [];
    let taskId = 1;

    return{

        addTask : function (title){
            tasks.push({id : taskId++, title : title, completed : false});
        },

        getAllTasks : function(){
            return JSON.stringify(tasks, null, 2);
        },

        markComplete : function(taskId){
            tasks.forEach(task => {
                if(task.id === taskId){
                    task.completed = true;
                }
            });
        },

        removeTask : function(taskId){
            tasks = tasks.filter(task => task.id !== taskId);
        },

        getPendingTasks : function(){
            return tasks.filter(task => !task.completed).map(task => task.title);
        },

        getCompletedTasks : function(){
            return tasks.filter(task => task.completed).map(task => task.title);
        },

        sortTasks : function(){
            return tasks
                .slice()
                .sort((a, b)=> a.title.localeCompare(b.title))
                .map(task => task.title)
        }
    };
})();

TaskManager.addTask("Learn JavaScript");
TaskManager.addTask("Learn React.js");
TaskManager.addTask("Build a project");

console.log("All Tasks", TaskManager.getAllTasks());

TaskManager.markComplete(2);
console.log("Completed Tasks:", TaskManager.getCompletedTasks());

console.log("Pending Tasks:", TaskManager.getPendingTasks());

console.log("Sorted Task Titles:", TaskManager.sortTasks());

TaskManager.removeTask(1);
console.log("Tasks After Removel:", TaskManager.getAllTasks());
