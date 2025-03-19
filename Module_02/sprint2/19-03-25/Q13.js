function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    // Add "David" at index 1
    students.splice(1, 0, "David");

    // Check if "Eve" is in the list
    console.log("Is Eve in the list?", students.includes("Eve")); 

    // Convert the array to a string with names separated by commas
    console.log("Students list:", students.join(", ")); 

    return students; // Returning for testing purposes
}

// Test cases
function testManageStudents() {
    let students = manageStudents();

    // Test 1: Check if "David" was added at index 1
    console.log("Test 1 Passed:", students[1] === "David");

    // Test 2: Ensure "Eve" is not in the list
    console.log("Test 2 Passed:", students.includes("Eve") === false);

    // Test 3: Check if join() works correctly
    console.log("Test 3 Passed:", students.join(", ") === "Alice, David, Bob, Charlie");

    // Additional Test 4: Add another name at a different position
    students.splice(2, 0, "Eve"); // Add "Eve" at index 2
    console.log("Test 4 Passed:", students[2] === "Eve");
}

testManageStudents();
