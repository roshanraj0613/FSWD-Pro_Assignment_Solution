function extractDateParts(dateString) {
    let datePattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    let match = datePattern.exec(dateString);

    if (match) {
        return {
            day: match[1],
            month: match[2],
            year: match[3]
        };
    } else {
        return null;
    }
}

console.log(extractDateParts('29/01/2024')); // { day: '29', month: '01', year: '2024' }
console.log(extractDateParts('This is not a date')); // null