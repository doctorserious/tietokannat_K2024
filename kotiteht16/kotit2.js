function onPalindromi(letters) {

    var characters  = letters.split(''),
        firstLetter = characters.shift(),
        lastLetter  = characters.pop();

    if (firstLetter !== lastLetter) {
        return false;
    }

    if (characters.length < 2) {
        return true;
    }

    return onPalindromi(characters.join(''));

}

console.log(onPalindromi('saippuakauppias'));
console.log(onPalindromi('innostunutsonni'));
console.log(onPalindromi('palindromi'));