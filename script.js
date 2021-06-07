const charAmntRan = document.getElementById("charAmtRange");
const charAmntNum = document.getElementById("charAmtNum");
const includeUCaseElem = document.getElementById("includeUCase")
const includeNumsElem = document.getElementById("includeNum")
const includeSymsElem = document.getElementById("includeSyms")

const UCASE_CHAR_CODES = arrayFLotoHi(65, 90);
const LCASE_CHAR_CODES = arrayFLotoHi(97, 122);
const NUM_CHAR_CODES = arrayFLotoHi(48, 57);
const SYMS_CHAR_CODES = arrayFLotoHi(33, 47).concat(arrayFLotoHi(91, 96)).concat(arrayFLotoHi(123, 126));

const paswordDisplay = document.getElementById('pWordDisplay')

const form = document.getElementById("passGenForm");

charAmntNum.addEventListener('input', syncCharacterAmount);
charAmntRan.addEventListener('input', syncCharacterAmount);

// This function syncs the amount range slider and the number counter
function syncCharacterAmount(e){
  const value = e.target.value;
  charAmntNum.value = value;
  charAmntRan.value = value;
}

form.addEventListener('submit', e =>{
  e.preventDefault();
  const charAmnt = charAmntNum.value;
  const includeUCase = includeUCaseElem.checked;
  const includeNum = includeNumsElem.checked;
  const includeSyms = includeSymsElem.checked;

  const password = generatePassword(charAmnt, includeUCase, includeNum, includeSyms)
  paswordDisplay.innerText = password;
})

function generatePassword(charAmnt, includeUCase, includeNum, includeSyms){
  let charCodes = LCASE_CHAR_CODES;
  if (includeUCase) charCodes = charCodes.concat(UCASE_CHAR_CODES);
  if (includeNum) charCodes = charCodes.concat(NUM_CHAR_CODES);
  if (includeSyms) charCodes = charCodes.concat(SYMS_CHAR_CODES);
  const passChars = []

  for(let i = 0; i < charAmnt; i++){
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passChars.push(String.fromCharCode(characterCode));
  }

  return passChars.join('');
}

function arrayFLotoHi(low, high){
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array;
}