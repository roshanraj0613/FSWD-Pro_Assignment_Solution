function findMatches(string) {
    let digitPattern = /\d/g;
    let upperCasePattern = /[A-Z]/g;
    let lowerCasePattern = /[a-z]/g;
    let specialCharPattern = /\W/g;

    return {
        digits: string.match(digitPattern),
        upperCaseLetters: string.match(upperCasePattern),
        lowerCaseLetters: string.match(lowerCasePattern),
        specialCharacters: string.match(specialCharPattern)
    };
}

console.log(findMatches('Hello, World! 123'));