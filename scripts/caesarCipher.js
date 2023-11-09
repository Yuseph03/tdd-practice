export default function caesarCipher(text, key) {
    const textArr = Array.from(text);
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for(let i = 0; i < textArr.length; i++) {
        if(textArr[i] === 'z') {
            textArr[i] = alphabet[0];
        }
        if(textArr[i] === ' '){
            textArr[i] = ' ';
        } else if(textArr[i] == textArr[i].toUpperCase()) {
            const shiftLetter = findLetter(textArr[i]);
            textArr[i] = alphabet[shiftLetter + key].toUpperCase(); 
        } else {
            const shiftLetter = findLetter(textArr[i]);
            textArr[i] = alphabet[shiftLetter + key];  
        }
    } 

    function findLetter(letter) {
        let matchLetter;
        if(letter === letter.toUpperCase()) {
            matchLetter = alphabet.find((element) => element.toUpperCase() === letter);
        } else {
            matchLetter = alphabet.find((element) => element === letter);
        }
        return alphabet.indexOf(matchLetter);
    }
    const cipherText = textArr.join('');
    return cipherText;
}