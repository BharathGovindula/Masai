function determineAccess(person) {
    return person.role === "admin" 
        ? !person.active ? "Admin Access Revoked" 
        : person.experience > 5 
            ? person.department === "IT" ? "Full IT Admin Access" 
            : "Full General Admin Access" 
        : "Limited Admin Access" 

        : person.role === "manager" 
        ? !person.active ? "Manager Access Revoked" 
        : person.experience > 3 
            ? person.department === "Sales" ? "Full Sales Manager Access" 
            : "Full Manager Access" 
        : "Limited Manager Access" 

        : person.role === "user" 
        ? !person.active ? "User Access Revoked" 
        : person.department === "Support" ? "Priority Support Access" 
        : "User Access" : "Invalid Role";
}

// Function to get user input dynamically
function getUserDetails() {
   
    let role = prompt("Enter your role (admin, manager, user):").toLowerCase();
    let experience = +(prompt("Enter your experience (in years):"), 10);
    let active = prompt("Are you active? (yes/no):").toLowerCase() === "yes";
    let department = prompt("Enter your department (IT, Sales, Support, etc.):");

    let person = { role, experience, active, department };
    console.log(`${determineAccess(person)}`);
}

// Call the function to get user details and determine access
getUserDetails();
