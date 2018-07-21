// --------- Fiz Buzz --------- //

function fizz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
            continue;
        } else if (i % 3 === 0) {
            console.log('Fizz');
            continue;
        } else if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        } else {
            console.log(i);

        }
    }
}

// --------- Harmles Ransom Note --------- //

function notePos(note, mag) {
    noteArr = note.split(' ');
    magArr = mag.split(' ');
    magObj = {};

    magArr.forEach(word => {
        if (!magObj[word]) magObj[word] = 0;
        magObj[word]++;
    });

    let notIsPossible = true;
    noteArr.forEach(word => {
        if (magObj[word]) {
            magObj[word]--;
            if (magObj[word] < 0) {
                notIsPossible = false;
            }
        }
        else notIsPossible = false;


    });

    return notIsPossible;

}

// --------- Is Palindrome --------- //

function isPalindrome(str) {
    let letterOfstr = str.toLowerCase().split('');
    const validChars = 'qwertyuıopğüasdfghjklşizxcvbnmöç'.split('');

    const strLetters = [];
    letterOfstr.forEach((letter) => {
        if (validChars.indexOf(letter) > -1) strLetters.push(letter);
    });

    if (strLetters.join('') === strLetters.reverse().join('')) return true;
    else return false;

}

// --------- Ceaser Cipher --------- //

function ceaserCipher(str, num) {
    num = num % 29;
    let strLower = str.toLowerCase();
    const alph = 'a b c ç d e f g ğ h i ı j k l m n o ö p r s ş t u ü v y z'.trim().split('');

    let newString = '';

    for (let i = 0; i < str.length; i++) {
        const currentLetter = strLower[i];
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }

        let currentIndex = alph.indexOf(currentLetter);
        let newIndex = currentIndex + num;
        if (newIndex > 28) {
            newIndex -= 29;
        }
        if (newIndex < 0) {
            newIndex += 29;
        }

        if (srt[i] === str[i].toUpperCase()) {
            newString += apl[newIndex].toUpperCase();
        } else {
            newString += apl[newIndex];
        }
    }

    return newString;

}

// --------- Reverse Words --------- //

function reverseWords(str) {
    let strArr = str.split(' ');
    const reverse = [];
    for (let i = 0; i < strArr.length; i++) {
        let reverseWord = '';
        for (let j = strArr[i].length - 1; j >= 0; j--) {
            reverseWord += strArr[i][j];
        }
        reverse.push(reverseWord);
    }

    return reverse.join(' ');

}

// --------- Reverse Array In Place --------- //
function reverseArray(arr) {
    let arrLent = arr.length -1;

    for(let i = 0; i < arr.length /2 ; i++) {

        arr[i] = arr[ arrLent -i];
    }

    return arr;

}

function reverseArray2(arr) {
    let arrLent = arr.length -1;

    for(let i = 0; i < arr.length /2; i++) {
        let tempvar = arr[i];
        arr[i] = arr[ arrLent -i];
        arr[arrLent -i] = tempvar;
    }

    return arr;

}

// ----------- Mean - Meadian - Mode ----------------- //

function meanMedianMode(arr) {


    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    }

}

function getMean(arr) {

    let sum= 0;
    let mean;

    arr.forEach((num) => {
        sum += num;
    });

    mean = sum / arr.length;

    return mean;

}

function getMedian(arr) {

    const sortedArr = arr.sort((a,b) => a - b);
    const lengthOfArray=  sortedArr.length;
    let median;

    if (lengthOfArray %2 === 0) {
        let mid1 = sortedArr[lengthOfArray/2];
        let mid2 = sortedArr[(lengthOfArray/2) -1];
        median = (mid1 + mid2) /2;
    } else {
        median = sortedArr[Math.floor(lengthOfArray/2)];
    }

    return median;
}

function getMode(arr) {
    const modeHashTable = {};

    arr.forEach(num => {
        if(!modeHashTable[num]) {
            modeHashTable[num] = 0;
        }
        modeHashTable[num]++;
    });

    let modes = [];
    let highFreq= 0;

    for(let prob in modeHashTable) {
        if( prob > highFreq) {
            modes = [prob];
            highFreq = prob;
        } else if (prob == highFreq) {
            nodes.push(prob);
        }
    }

    if (modes.length === Object.keys(modeHashTable).length) modes = [];

}