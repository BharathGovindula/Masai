function eligibility(age) {
    if (age <= 0) {
        console.log("Invalid Age");
        return; // Exit the function to prevent further execution
    }

    age >= 60 ? console.log("Eligible for Senior Discount") : console.log("Not Eligible for Senior Discount");
}

eligibility(65);  // Output: Eligible for Senior Discount
eligibility(-1);  // Output: Invalid Age
eligibility(30);  // Output: Not Eligible for Senior Discount
