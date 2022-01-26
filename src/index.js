const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let morse = '';
  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    //console.log(expr.slice(i, i + 10));
    for (let j = 0; j < expr.slice(i, i + 10).length; j += 2) {
      //console.log(expr.slice(i, i + 10).slice(j, j + 2));
      if (expr.slice(i, i + 10).slice(j, j + 2) === '10') {
        morse += '.';
      } else if (expr.slice(i, i + 10).slice(j, j + 2) === '11') {
        morse += '-';
      }
    }
    if (MORSE_TABLE[morse] !== undefined) {
      result += MORSE_TABLE[morse];
    } else {
      result += ' ';
    }
    morse = '';
  }
  //console.log(result);
  return result;
}

module.exports = {
    decode
}