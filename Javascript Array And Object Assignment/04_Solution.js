let students = [
    { id: 1, firstName: "Roshan", lastName: "Raj", age: 20, grade: "A" },
    { id: 2, firstName: "Harsh", lastName: "Kumar", age: 22, grade: "B" },
    { id: 3, firstName: "Sandeep", lastName: "Sharma", age: 23, grade: "A" },
];

// Add a Student
function addStudent(id, firstName, lastName, age, grade) {
    students.push({ id, firstName, lastName, age, grade });
}

// Update Student Information
function updateStudent(id, newInfo) {
    let student = students.find(student => student.id === id);
    if (student) {
        Object.assign(student, newInfo);
    }
}

// Delete a Student
function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
}

// List All Students
function listStudents() {
    students.forEach(student => console.log(student));
}

// Find Students by Grade
function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

// Calculate Average Age
function calculateAverageAge() {
    let totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}