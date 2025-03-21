// Create a JavaScript program that simulates a loading screen using setInterval. The program should:

//     Start by logging "Loading..." every 1 second.
//     After 5 seconds, stop the loading messages and log "Loaded successfully!".

// Use setInterval to repeat the loading message and clearInterval to stop it after 5 seconds.



let count=0
function logging(){
    let interval=setInterval(()=>{
        count++
        console.log("Loading...");
         if (count == 5) {
           clearInterval(interval);
           console.log("Loaded successfully!");
         }
    },1000)
}
logging()

