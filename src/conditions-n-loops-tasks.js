/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a > b ? a : b;
  max = max > c ? max : c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }

  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }

  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let newNum = num;
  let result = '';

  for (let i = newNum; i > 0; i -= 1) {
    if (newNum >= 10) {
      result += 'X';
      newNum -= 10;
    } else if (newNum >= 9) {
      result += 'IX';
      newNum -= 9;
    } else if (newNum >= 5) {
      result += 'V';
      newNum -= 5;
    } else if (newNum >= 4) {
      result += 'IV';
      newNum -= 4;
    } else if (newNum >= 1) {
      result += 'I';
      newNum -= 1;
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    if (i > 0) {
      res += ' ';
    }
    switch (numberStr[i]) {
      case '0':
        res += 'zero';
        break;

      case '1':
        res += 'one';
        break;

      case '2':
        res += 'two';
        break;

      case '3':
        res += 'three';
        break;

      case '4':
        res += 'four';
        break;

      case '5':
        res += 'five';
        break;

      case '6':
        res += 'six';
        break;

      case '7':
        res += 'seven';
        break;

      case '8':
        res += 'eight';
        break;

      case '9':
        res += 'nine';
        break;

      case '-':
        res += 'minus';
        break;

      case '.':
        res += 'point';
        break;

      case ',':
        res += 'point';
        break;
      default:
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let positiveNum = Math.abs(Math.floor(num));
  while (positiveNum > 0) {
    const currentDigit = positiveNum % 10;
    if (currentDigit === digit) {
      return true;
    }
    positiveNum = Math.floor(positiveNum / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let l = 0; l < i; l += 1) {
      leftSum += arr[l];
    }

    for (let r = arr.length - 1; r > i; r -= 1) {
      rightSum += arr[r];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }
  let num = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (num <= size * size) {
    for (let i = left; i <= right && num <= size * size; i += 1) {
      matrix[top][i] = num;
      num += 1;
    }
    top += 1;

    for (let i = top; i <= bottom && num <= size * size; i += 1) {
      matrix[i][right] = num;
      num += 1;
    }
    right -= 1;

    for (let i = right; i >= left && num <= size * size; i -= 1) {
      matrix[bottom][i] = num;
      num += 1;
    }
    bottom -= 1;

    for (let i = bottom; i >= top && num <= size * size; i -= 1) {
      matrix[i][left] = num;
      num += 1;
    }
    left += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const nMatrix = matrix;
  const n = nMatrix.length;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const temp = nMatrix[i][j];
      nMatrix[i][j] = nMatrix[j][i];
      nMatrix[j][i] = temp;
    }

    let start = 0;
    let end = nMatrix[i].length - 1;
    while (start < end) {
      const temp = nMatrix[i][start];
      nMatrix[i][start] = nMatrix[i][end];
      nMatrix[i][end] = temp;
      start += 1;
      end -= 1;
    }
  }

  return nMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sort = (_array, start = 0, end = _array.length - 1) => {
    const array = _array;
    if (start >= end) {
      return;
    }

    let pivotIndex = start;
    const pivotValue = array[end];

    for (let i = start; i < end; i += 1) {
      if (array[i] <= pivotValue) {
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        pivotIndex += 1;
      }
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];

    sort(array, start, pivotIndex - 1);
    sort(array, pivotIndex + 1, end);
  };

  sort(arr);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;

  for (let i = 1; i <= iterations; i += 1) {
    let evenStr = '';
    let oddStr = '';
    for (let j = 0; j < str.length; j += 1) {
      if (j % 2 === 0) {
        evenStr += result[j];
      } else {
        oddStr += result[j];
      }
    }
    result = evenStr + oddStr;
    if (result === str) return shuffleChar(str, iterations % i);
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = [...number.toFixed()];
  const numArray = arr.map((item) => +item);
  let returnPosition = 0;
  let minNumber = 0;
  for (let i = numArray.length - 2; i >= 0; i -= 1) {
    if (numArray[i + 1] > numArray[i]) {
      const temp = numArray[i];
      minNumber = temp;
      returnPosition = i;
      numArray[i] = numArray[i + 1];
      numArray[i + 1] = temp;
      break;
    }
  }
  if (returnPosition === 0) {
    return number;
  }
  const arrayforSortArterMin = [];
  const arrayforSortBeforeMin = [];
  for (let i = 0; i <= returnPosition - 1; i += 1) {
    arrayforSortBeforeMin.push(numArray[i]);
  }
  for (let i = returnPosition + 1; i <= numArray.length - 1; i += 1) {
    arrayforSortArterMin.push(numArray[i]);
  }
  const arrayforSortArterMinSort = arrayforSortArterMin.sort((a, b) => a - b);
  for (let i = arrayforSortArterMinSort.length - 1; i >= 0; i -= 1) {
    if (
      arrayforSortArterMinSort[i] < numArray[returnPosition] &&
      arrayforSortArterMinSort[i] > minNumber
    ) {
      const temp = arrayforSortArterMinSort[i];
      arrayforSortArterMinSort[i] = numArray[returnPosition];
      numArray[returnPosition] = temp;
    }
  }
  const preresult = [...arrayforSortBeforeMin, numArray[returnPosition]];
  const result = Number([...preresult, ...arrayforSortArterMinSort].join(''));
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
