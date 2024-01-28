// a) Create a student object
let student = {
    name: 'Roshan Raj',
    age: 20
};

// b) Use Object.preventExtensions to prevent further additions of properties to student
Object.preventExtensions(student);

// c) Use Object.isExtensible to check if student is extensible
let extensibleStatus = Object.isExtensible(student);

// d) Create a teacher object
let teacher = {
    name: 'sanket sir',
    subject: 'Math'
};

// e) Use Object.seal to seal the teacher object
Object.seal(teacher);

// f) Use Object.isSealed to check if teacher is sealed
let sealedStatus = Object.isSealed(teacher);

// g) Print extensibleStatus and sealedStatus
console.log(`Student extensible status: ${extensibleStatus}`); // false
console.log(`Teacher sealed status: ${sealedStatus}`); // true