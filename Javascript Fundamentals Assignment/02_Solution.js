function regexTest(pattern, string)
{
    let regex = new RegExp(pattern);
    return regex.test(string);
}
console.log(regexTest('abc', 'abcdef')); // true
console.log(regexTest('^abc', 'abcdef')); // true
console.log(regexTest('^abc', 'abcdefabc')); // true
console.log(regexTest('abc$', 'abcdefabc')); // true
console.log(regexTest('abc$', 'abcdef')); // false
console.log(regexTest('\\d+', '123')); // true
console.log(regexTest('\\d+', 'abc')); // false