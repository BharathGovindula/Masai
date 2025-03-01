function determineAccess(person) {
    let access = person.role === "admin" 
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
        : "User Access" 
        
        : "Invalid Role";

    console.log(access);
}


determineAccess({ role: "admin", experience: 7, active: true, department: "IT" });
// Output: "Full IT Admin Access"

determineAccess({ role: "manager", experience: 4, active: true, department: "Marketing" });
// Output: "Full Manager Access"

determineAccess({ role: "user", experience: 2, active: true, department: "Support" });
// Output: "Priority Support Access"

determineAccess({ role: "admin", experience: 3, active: false, department: "Finance" });
// Output: "Admin Access Revoked"


