function gradeStudent(mark) {
    let grade;
    if (mark > 90) {
        grade = 'A';
    } else if (mark >= 70 && mark <= 90) {
        grade = 'B';
    } else if (mark >= 50 && mark < 70) {
        grade = 'C';
    } else {
        grade = 'F';
    }
    return grade;
}

console.log(gradeStudent(85)); 
// Outputs: B