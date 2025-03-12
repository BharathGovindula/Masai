// Problem Statement
// You are managing a library system where different sections contain books on various subjects. The library wants to add new sections while keeping the existing data unchanged.

// Your task is to:

// 1️⃣ Define a function updateLibrary that takes two parameters:

// library (Object) – The existing library data
// newSection (Object) – The new section to be added
// 2️⃣ The function should return a new library object with the updated sections, ensuring that:

// The original sections remain unchanged.
// The new section is added using the spread operator.
// Other properties like name, established, and members remain the same.
// const library = {
//   name: "Central Library",
//   established: 1985,
//   sections: {
//     fiction: { books: 200, librarians: 3 },
//     science: { books: 150, librarians: 2 },
//     history: { books: 100, librarians: 1 }
//   },
//   members: [
//     { name: "Amit", age: 25, borrowedBooks: ["fiction", "science"] },
//     { name: "Priya", age: 30, borrowedBooks: ["history"] },
//     { name: "Raj", age: 22, borrowedBooks: ["fiction", "history"] }
//   ]
// };

// const newSection = {
//   philosophy: { books: 80, librarians: 1 }
// };
// Expected Output:

// {
//   name: "Central Library",
//   established: 1985,
//   sections: {
//     fiction: { books: 200, librarians: 3 },
//     science: { books: 150, librarians: 2 },
//     history: { books: 100, librarians: 1 },
//     philosophy: { books: 80, librarians: 1 }
//   },
//   members: [
//     { name: "Amit", age: 25, borrowedBooks: ["fiction", "science"] },
//     { name: "Priya", age: 30, borrowedBooks: ["history"] },
//     { name: "Raj", age: 22, borrowedBooks: ["fiction", "history"] }
//   ]
// }
// Submission Guidelines
// Implement the solution and ensure that it runs without errors.

// Include comments in your code to explain the logic and flow.



const library = {
    name: "Central Library",
    established: 1985,
    sections: {
      fiction: { books: 200, librarians: 3 },
      science: { books: 150, librarians: 2 },
      history: { books: 100, librarians: 1 }
    },
    members: [
      { name: "Amit", age: 25, borrowedBooks: ["fiction", "science"] },
      { name: "Priya", age: 30, borrowedBooks: ["history"] },
      { name: "Raj", age: 22, borrowedBooks: ["fiction", "history"] }
    ]
  };
  
  const newSection = {
    philosophy: { books: 80, librarians: 1 }
  };
  
  // Function to update the library with a new section while keeping original data unchanged
  function updateLibrary(library, newSection) {
    return {
      ...library,
      sections: {
        ...library.sections,
        ...newSection
      }
    };
  }
  
  // Updating the library
  const updatedLibrary = updateLibrary(library, newSection);
  console.log(JSON.stringify(updatedLibrary,null, 2));

  