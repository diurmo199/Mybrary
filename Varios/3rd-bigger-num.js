const prompt = require("prompt-sync")();
var numArray = [];
var numbers = null;
var position = null;

// Data input to get the number list. Also need to ask for the position.
var askNumer = () => {
  let tmpNum = parseInt(prompt(`Please enter the number of items you want as input. Max of 15 (You have 3 tries): `));
  let tmpPos = parseInt(prompt(`Please enter the position you want to check: `));
  var inputIsValid = numberValidate(tmpNum, tmpPos);
  if (inputIsValid != true) {
    print(`No valid entries. Program terminated.`);
    return false;
  }
  numbers = tmpNum;
  position = tmpPos;

  for (i = 1; i <= numbers; i++) {
      let answer = parseInt(prompt(`Please enter the ${i} number: `));
      numArray.push(answer);
      answer = "";
  }
}

// function to validate the number and position entered by the user
var numberValidate = (num, pos) => {
  let userNum = num;
  let userPos = pos;
  let validNumber = false;
  let tries = 3;

  // While loop to check if the number is between 1 - 15 and count the number of tries.
  while(!validNumber){
  if (userNum > 15 || userNum == 0 || userNum == null) {
    print(`Number is too high. Please indicate a number between 1 and 15`);
    tries = tries--;
    // if no remaining tries, get off of the loop and return FALSE as number is not valid
    if (tries == 0) {
      print("You have reached the total number of tries.");
      return false;
    }
  }
  // Now that we have the number, need to validate if the position is correct to ask
  if (userPos > userNum || userPos == 0) {
    print(`Position not valid. Need to be between 1 and ${userNum}`);
    //prompt(`Position not valid. Need to be between 1 and ${userNum}`);
  } else {
    validNumber = true;
  }
  }
  return validNumber;
}

// Function to sort the given array. BubbleSort algorithm5
var sortNumber = (array) => {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
      }
      return array;
}

//var newArray = [2,213,4,123,54,645,223,1,444444,3231,2424];

//Return the number in position indicated
var returnValue = (array,pos) => {
    var tmp = array.length;
    return array[tmp - pos];
}

askNumer(numbers);
sortNumber(numArray);
console.log(`The number in position ${position} in the given list is ` + returnValue(numArray,position));
//returnValue(newArray);
