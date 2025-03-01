function generateAccessMessage(user) {
    let message = 
        user.role === "admin" ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked") :
        user.role === "user" ? (user.active ? "User Access Granted!" : "User Access Revoked") :
        "Access Denied";

    console.log(message);
}


let user1 = { name: "Alice", role: "admin", active: false };
generateAccessMessage(user1); // Output: "Admin Access Revoked"

let user2 = { name: "Bob", role: "user", active: true };
generateAccessMessage(user2); // Output: "User Access Granted!"

