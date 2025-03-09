function TaskManager(){
    let tasks = [];

    return {
        addTask(title){
            tasks.push({title, status: "pending"});
            return this;
        },

        completeTask(title){
            tasks = tasks.map(task =>
                task.title === title ? {...task, status : "completed"} : task
            );
            return this;
        },

        filterTasks(status){
            tasks = tasks.filter(task => task.status === status);
            return this;
        },

    

        listTasks(){
            console.log("\nTasks:");
            tasks.forEach((task, index) => console.log(`${index +1 }. ${task.title} - ${task.status}`))
            return this;
        },

        sortTasks(){
            tasks.sort((a, b) => a.title. localeCompare(b.title));
            return this;
        },

       countTasks(){
        const count = tasks.reduce((acc, task)=>{
            acc[task.status]++;
            return acc;
        },{pending : 0, completed : 0});

        console.log("\nTask Count:", count);
        return this;
       }

    };
}

const  manager = TaskManager();

manager.addTask("Attend Scrum")
        .addTask("Attend Lectures")
        .addTask("Solve Assignments")
        .completeTask("Solve Assignments")
        .sortTasks()
        .listTasks()
        .countTasks();