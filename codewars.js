console.log("hello");
function validateWord(s) {
  // loop through put each value in map
  // add one
  // if value is there add another one to it
  //if all values are same return true

  //Code goes here!
  let obj = {};
  let value = 1;
  let st = s.toLowerCase();
  for (let i = 0; i < st.length; i++) {
    if (obj[st[i]]) {
      obj[st[i]] += 1;
    } else {
      obj[st[i]] = value;
    }
  }
  console.log(new Set(Object.values(obj)));
  return new Set(Object.values(obj)).size === 1;
}
function ev(s) {
  console.log(new Set(s));
}

/* Given a non-negative integer, return an array / a list of the individual digits in order. */
function digitize(n) {
  let s = n.toString().split("").map(Number);
  return s;
}

function per(n) {
  num = n.toString();

  let arr = [];
  if (num.split("").length == 1) {
    return [];
  }
  while (num.length > 1) {
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
    arr.push(num);
  }
  return arr.map(Number);
}

function paintLetterboxes(start, end) {
  const frequencies = new Array(10).fill(0);
  for (let number = start; number <= end; number++) {
    number
      .toString()
      .split("")
      .forEach((x) => frequencies[x]++);
  }
  return frequencies;
}

function duplicateElements(m, n) {
  console.log(m, n);
  var bool = false;
  if (m.length == 0 || n.length == 0) {
    bool = false;
  }
  for (let i = 0; i < m.length; i++) {
    let index = n.indexOf(m[i]);
    console.log(index);
    if (index > -1) {
      bool = true;
      break;
    } else {
      bool = false;
    }
  }
  console.log(bool);
}

function isVeryEvenNumber(n) {
  // keep looping and adding value until it is a single value
  let sum = 0;
  num = n.toString();

  if (num.split("").length == 1 && num % 2 != 0) {
    console.log("false");
    return false;
  }
  while (num > 9) {
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a + b)
      .toString();
    sum = num;
  }
  if (sum % 2 == 0) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
function pr(n) {
  num = n;
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => +a + +b); // way to split and add digits over and over
    console.log(num);
  }
}

/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. 
      Ignore letter case. */
function isIsogram(str) {
  // use set that stores all non duplicates
  // if the length of the str isnt same as the set size then that means there were duplicates
  let s = str.toLowerCase();
  let st = new Set(s);
  console.log(st);
  console.log(s.length);
}

function isIsogr(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j)
      if (str[i] === str[j]) console.log(i, str[j]);
  console.log(i, str[j]);
}
function isVeryEvenNumb(n) {
  // keep looping and adding value until it is a single value
  let num = n;

  if (num < 10 && num % 2 == 0) {
    console.log("true");
    return true;
  } else if (num > 10) {
    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b)
      .toString();
    isVeryEvenNumb(num);
  } else {
    console.log(num % 2 == 0 ? true : false);
  }
}
function calc(x) {
  let spl = x.split("");
  let value = "";
  for (let i = 0; i < spl.length; i++) {
    value += spl[i].charCodeAt(0);
  }
  let arr = value.toString().split("").map(Number);
  let newarr = value.toString().split("").map(Number);
  console.log(newarr);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == 7) {
      arr[j] = 1;
    } else {
      continue;
    }
  }
  console.log(arr, newarr);
  let sumone = arr.reduce((a, b) => a + b, 0);
  let sumtwo = newarr.reduce((a, b) => a + b, 0);
  console.log(sumone, sumtwo);
  let total = sumtwo - sumone;

  console.log(total);
}

function unluckyDays(year) {
  var count = 0;
  for (var month = 0; month < 12; month++) {
    var d = new Date(year, month, 13);
    if (d.getDay() == 5) {
      count++;
    }
  }
  return count;
}
function getLargerNumbers(a, b) {
  // two arrays compare each index with the other array
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= b[i]) {
      newArray.push(a[i]);
    } else {
      newArray.push(b[i]);
    }
  }
  return newArray;
}

function sum() {
  var total = Array.prototype.slice.call(arguments).reduce((a, b) => a + b, 0);
  return total;
  // return the sum of all arguments given.
}

function dontGiveMeFive(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    let st = i.toString();
    if (st.match(/[5]/g)) {
      continue;
    } else {
      arr.push(i);
    }
  }

  return arr.length;
}

function leastLarger(a, i) {
  // pull out the value at given i
  // sort the rest of array and return first value bigger then the value at i
  console.log(a, i);
  let arr = [...a];
  let value = arr[i];
  let newarr = a.sort(function (a, b) {
    return a - b;
  });

  let index = newarr.indexOf(value);
  for (let i = index; i < newarr.length; i++) {
    if (newarr[i] > value) {
      console.log(arr.indexOf(newarr[i]));
      return arr.indexOf(newarr[i]);
    } else {
      continue;
    }
  }
  return -1;
}

function leastLarger(a, i) {
  const targetVal = a[i];
  const largerVals = a.filter((num) => num > targetVal);
  console.log(largerVals);
  const leastLargeVal = Math.min(...largerVals);
  console.log(leastLargeVal);
  return a.findIndex((num) => num === leastLargeVal);
}
function battle(x, y) {
  const abc = (z) => z.codePointAt();
  const first = [...x]
    .map((el) => (abc(el) < 91 ? abc(el) - 64 : (abc(el) - 96) / 2))
    .reduce((a, b) => a + b, 0);
  const second = [...y]
    .map((el) => (abc(el) < 91 ? abc(el) - 64 : (abc(el) - 96) / 2))
    .reduce((a, b) => a + b, 0);
  return first > second ? x : first < second ? y : "Tie!";
}

function smaller(nums) {
  // look at each value in the nums array
  // count how many numbers to the right of it are smaller
  //if the numbers is larger then current index increase count by 1
  //push the count to the current index
  let count = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      } else {
        continue;
      }
    }
    arr.push(count);
    count = 0;
  }
  return arr;
}

function compose(s1, s2) {
  // your code

  // from s1 its [0] 1 char [1] 2char, [2] 3 char so from s1 every line char amoutn goes up
  //from sw start at the end at take all charac then 1 less then previous, and then 2 less the previous,last line only first char of first line s2
  let s1Split = s1.split(/\r?\n/);
  let s2Split = s2.split(/\r?\n/);
  let strng = "";

  for (let i = 0; i < s1Split.length; i++) {
    strng +=
      s1Split[i].slice(0, i + 1) +
      s2Split[s2Split.length - i - 1].slice(0, s2Split.length - i);
    if (i < s1Split.length - 1) {
      strng += `\n`;
    }
  }
  return strng;
}

function nbDig(n, d) {
  let count = "";
  const re = RegExp(d, "g");
  for (let i = 0; i <= n; i++) {
    count += i ** 2;
  }
  return count.match(re).length;
}
//d was an integer that we needed to find all instances of from 0 to n^2

function tetration(x, y) {
  // we want to take x and raise that value to itself y times
  //y is

  let arr = 1;
  for (let i = 0; i < y; i++) {
    arr = x ** arr;
  }
  return arr;
}

function center(strng, width, fill = " ") {
  return strng.length > width
    ? strng
    : strng
        .padStart(Math.ceil((width + strng.length) / 2), fill)
        .padEnd(width, fill);
}

function makeValley(arr) {
  // input array
  // retunr arry with left side descending, right side ascending
  // re sort array from ascending to descednding then create new array pulling values from
  //orignal array
  // make two arrays push values from arr to arr1 and arr2

  let Larr = [];
  let Rarr = [];
  console.log(Larr);

  const something = arr.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < something.length; i++) {
    if (i % 2 == 0) {
      Larr.push(something[i]);
    } else {
      Rarr.unshift(something[i]);
    }
  }
  return Larr.concat(Rarr);

  // Your code
}

function mxdiflg(a1, a2) {
  // loop through each array
  // take length of each of the array 1 string and subtract from each of the array2
  // push value to new array then get max value
  // the way the loop works is first we do a1[0],a2[0],a1[0],a2[1]
  //second array loop goes thrpugh all values first then comes back and increases index of first array
  let arr = [];
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      arr.push(Math.abs(a1[i].length - a2[j].length));
    }
  }
  return arr.length > 0 ? Math.max(...arr) : -1;
}

function convert(number) {
  // split value at every even index
  // go through each array i via map and get the ASCII letter
  //get the array join and return
  // ...Convert integers given as string into ASCII uppercase letters...

  let arr = number
    .match(number.length % 2 ? /^\d|\d{2}/g : /\d{2}/g)
    .map(String);
  // this code splits number into two digits, ex: 6565 = ['65','65']

  let newarr = arr.map((el) => String.fromCharCode(el));
  return newarr.join("");

  //OR try this
  String.fromCharCode(...number.match(/../g));
}

function solution(str, ending) {
  if (typeof str != "string" || typeof ending != "string") throw "wrong type";
  if (ending.length > str.length) return false;
  return str.substr(str.length - ending.length, ending.length) == ending;
}

function pattern(n) {
  var result = "1";
  for (var i = 2; i <= n; i++) {
    result += "\n1" + "*".repeat(i - 1) + i;
  }
  return result;
}

// let output='1'
// for(let i =2;i<=n;i++){
//   output+='\n1'+ '*'.repeat(i-1) +i
// }

function vowelIndices(word) {
  let ar = [];
  word = word.toLowerCase();
  console.log(word);
  let vowel = ["a", "e", "i", "o", "u", "y"];
  word.split("").map((l, i) => {
    if (vowel.includes(l)) {
      ar.push(i + 1);
    }
  });
  return ar;
}

function arrAdder(arr) {
  var sentence = "";
  for (var i = 0; i < arr[0].length; i++) {
    for (var j = 0; j < arr.length; j++) {
      sentence += arr[j][i];
    }
    sentence += " ";
  }
  return sentence.trim();
}

const xMarksTheSpot = (input) => {
  if (input === undefined || input.length == 0) {
    return [];
  }
  let count = 0;
  let arr = [];
  for (var i = 0; i < input[0].length; i++) {
    for (var j = 0; j < input.length; j++) {
      if (input[j][i] == "x") {
        arr.push(j, i);
        count++;
      } else {
        continue;
      }
    }
  }

  return count == 1 ? arr : [];
};

let stringMerge = (a, b, c) => a.slice(0, a.indexOf(c)) + b.slice(b.indexOf(c));

function comopl(arr1, sum) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (obj.hasOwnProperty(arr1[i])) {
      console.log(true);
    } else {
      obj[sum - arr1[i]] = true;
    }
  }
  console.log(obj);
}

function nesSum(arr1, sum) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] + arr1[j] == sum) {
        console.log(true);
        console.log(i, j);
      }
    }
  }
}
var twoSum = function (nums, target) {
  //{index:value  }

  let comp = {};
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (comp.hasOwnProperty(nums[i])) {
      res.push(i);
      res.push(nums.indexOf(target - nums[i]));
    } else {
      comp[target - nums[i]] = comp[i];
    }
  }

  return res;
};

var maxSubArray = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
};

// function takes in the array loops through it and returns last even number left
// we want to take the index 1,3,5,7,etcc so i is every two
function lastStanding(n) {
  // n is the lengthof the array required
  console.log("h");
  let arr = [];
  //first need the array with the values in it
  for (let i = 1; i <= n; i++) {
    arr.push(i);
    console.log(arr);
  }
  // while the array is still greater then 1 then we want to still take the values out
  console.log(arr);
  while (arr.length > 1) {
    let temp = [];
    for (let j = 1; j < arr.length; j += 2) {
      temp.push(arr[j]);
    }
    arr = temp.reverse(); // we want after every round of loop to reverse and do the process from the other side
  }
  console.log(arr);
  return arr;
}

function direction(facing, turn) {
  let compass = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  let index = compass.indexOf(facing) + 1;
  let steps = turn / 45;
  if (steps < 0) {
    compass.reverse();
    steps = Math.abs(steps);
  }
  let temp = [];
  let counter = 0;
  let loops = compass.length;
  while (counter != steps) {
    for (let i = index; i < loops; i++) {
      counter++;
      if (counter == steps) {
        temp.push(compass[i]);
      }
    }
    loops = steps - counter;
    index = 0;
  }
  counter = 0;
  console.log(temp.join());
  return temp.join();

  // your code here
}

function red() {
  const students = ["a", "n", "c"];
  let arr = [];
  let stu = students.forEach(function (t, i) {
    arr.push(`${i + 1}:${t}`);
  });

  console.log(arr);
}
function destruct() {
  let ar = ["a", "b", "a"];
  const ind = ar.indexOf("a");
  // let newarr = ar.map(([a,b,c])=>a>b?'no':c)
  console.log(ind);
}

function solve(arr) {
  const alp = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let numbersOccupy = [];
  let count = 0;
  arr.forEach(function (x) {
    let newArray = x.split("");
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].toUpperCase() === alp[i]) {
        count++;
      } else {
        continue;
      }
    }
    numbersOccupy.push(count);
    count = 0;
  });
  console.log(numbersOccupy);
  return numbersOccupy;
  //code
}

function bingo(a) {
  // giving us an array
  // each number corresponds to alpahbet in the same index
  // if the word bingo is in their return WIN
  // your winning code here

  const alphabet = [
    "",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const win = ["B", "I", "N", "G", "O"];
  let res = a.map((x) => alphabet[x]);
  let an = win.every((v) => res.includes(v));
  return an ? "WIN" : "LOSE";
}

function solution(nums) {
  // go through array
  // if one value is bigger then other then it should go after that value
  // keep evaluating the value with the rest and if its higher then put it in the spot after
  //
  console.log(nums);
  let count = 0;
  let sor = [];
  if (nums == null || nums.length == 0) {
    return [];
  }
  let len = nums.length;
  while (count < len) {
    let max = nums.splice(nums.indexOf(Math.max(...nums)), 1);
    console.log(...max);
    sor.unshift(...max);

    count++;
  }
  return sor;
}

// function to elimante values that show up more then n

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    console.log(cache[n], n);
    return cache[n] <= x;
  });
}

function lastIndexOf(head, value) {
  let currentNode = head;
  //   console.log(currentNode)
  let arr = [];
  let count = 0;
  while (currentNode != null) {
    //       console.log(currentNode.data)
    if (currentNode.data === value) {
      console.log(currentNode.data);
      arr.push(count);
    }
    currentNode = currentNode.next;
    count++;
  }

  if (arr.length < 1) {
    return -1;
  }
  console.log(arr[arr.length - 1]);
  return arr[arr.length - 1];
}
function incrementer(nums) {
  // go through array values add each value to its position
  // if the new val after suming is 2 digits only push second digit
  // push the value to new array
  // sum all the values
  // code goes here
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    let val = i + 1 + nums[i];
    if (val > 9) {
      let str = val.toString();
      let newval = str[str.length - 1];
      newval = Number(newval);
      //       console.log(typeof(Number(val)))
      newArr.push(newval);
      console.log(newArr);
    } else {
      newArr.push(val);
    }
  }
  return newArr;
}

function squareIt(int) {
  // get length of digit convert to str
  // find sqr root of digits length of %2 ==0 then its perfect
  // if perfect then every sqrt add break if i is divisbile by sqrt add break at the int
  let str = int.toString();
  let sqrt = Math.sqrt(str.length);
  let an = "";
  if (str.length % sqrt == 0) {
    for (let i = 0; i < str.length; i++) {
      if (i % sqrt == 0) {
        an += str.slice(i, i + sqrt) + "\n";
      }
    }
  } else {
    an = "Not a perfect square!";
  }
  console.log(an.trim());
  return an.trim("\n");
  // return 'Not a perfect square!';

  function encode(str, num) {
    var key = num.toString();
    return str.split("").map(function (char, i) {
      return char.charCodeAt(0) - 96 + +key[i % key.length];
    });
  }
}

function minSum(arr) {
  arr.sort((x, y) => x - y);
  s = 0;
  while (arr.length) s += arr.pop() * arr.shift();
  return s;
}

missingNo = (n) => {
  for (i = 0; i <= 100; i++) {
    if (!n.includes(i)) {
      return i;
    }
  }
};

// const max_sub_array_of_size_k = function(k, arr) {
//   // TODO: Write your code here

//   // get subarray from 0 to 3, 1 to 4 this will keep giving us subarray of length of k

//   let p =0
//   // ex arr = [1,2,3,4]
//   // subarray = [1,2,3] 0,3
//   //subarray = [2,3,4] 1,4
//   console.log(arr)
//   let sub =[]
//   let arry =[]
//   let sum = 0
// for(let i =0;i<arr.length;i++){
//      sub = arr.slice(i,k+i)

//      if(sub.length ==k){
//        for(let j =0;j<sub.length;j++){

//          sum+=sub[j]
//          arry.push(sum)
//        }
//        sum =0
//      }
//     console.log(sum)
//   }
//   console.log(Math.max(...arry))
//   return Math.max(...arry)
// }

function smallest_subarray_sum(s, arr) {
  let minLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element

    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1; // sliding the window
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

//Given a string, find the length of the longest substring in it with no more than K distinct characters.

function find_distinct(str, k) {
  // given a string fnd longest substring with only ex: 2 different characters
  //ex: araaci
  // araa = 2 distinct characters and length = 4
  //araac would not work because 3 distinct characters
  // loop through entire string checking
  //araa,raa,aac,aci etc move down the string until find k exceeds amount

  let windowStart = 0;
  let hash = {};
  let maxLength = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (rightChar in hash) {
      hash[rightChar] += 1;
    } else {
      hash[rightChar] = 1;
    }
    console.log(hash);
    while (Object.keys(hash).length > k) {
      let leftChar = str[windowStart];
      hash[leftChar] -= 1;
      if (hash[leftChar] === 0) {
        delete hash[leftChar];
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  console.log(maxLength);
  console.log(hash);
}

const fruits_into_baskets = function (fruits) {
  let windowStart = 0;
  let fruitBasket = {};
  let maxlength = 0;
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    //loop through fruits array
    let rightChar = fruits[windowEnd];
    if (rightChar in fruitBasket) {
      fruitBasket[rightChar] += 1;
    } else {
      fruitBasket[rightChar] = 1;
    }
    console.log("len", Object.keys(fruitBasket).length);
    while (Object.keys(fruitBasket).length > 2) {
      // {a:1,B:1,C:1} len>2
      let leftChar = fruits[windowStart];
      // console.log(leftChar)
      fruitBasket[leftChar] -= 1;
      if (fruitBasket[leftChar] == 0) {
        console.log(fruitBasket[leftChar]);
        delete fruitBasket[leftChar];
      }
      windowStart += 1;
    }
    console.log(fruitBasket);
    maxlength = Math.max(maxlength, windowEnd - windowStart + 1);
    console.log(maxlength);
  }
  // TODO: Write your code here
  return maxlength;
};

const non_repeat_substring = function (str) {
  console.log(str);
  let windowStart = 0;
  let differentString = {};
  let maxLength = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (!(rightChar in differentString)) {
      differentString[rightChar] = 1;
    } else {
      console.log(differentString);
      windowStart = windowEnd;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
const max_sub_array_of_size_k = function (k, arr) {
  let windowStart = 0,
    maxSum = 0,
    sum = 0,
    counter = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];
    console.log("sum", sum);
    counter++;
    console.log("cout", counter);
    while (counter >= k) {
      maxSum = Math.max(maxSum, sum);
      console.log(maxSum);
      sum = sum - arr[windowStart];
      windowStart++;
      counter--;
    }
  }
  // TODO: Write your code here
  return maxSum;
};

function scrabbleScore(str) {
  // whatever letter is in the str get the value from the dict and sum it
  let sum = 0;
  let dict = $dict;
  str = str.toUpperCase().replace(/\s/g, "");
  console.log(str);
  for (let letters = 0; letters < str.length; letters++) {
    sum += dict[str[letters]];
    console.log(str[letters]);
  }
  return sum;
  // ...
}

//Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
function divCon(x) {
  // go through array distinguish string from none string
  //add string values together convert to integer
  // subtract value got from string from non string ones
  let nonstring = 0;
  let string = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      string += parseFloat(x[i]);
    } else {
      nonstring += x[i];
      console.log("in", x[i]);
    }
  }
  return nonstring - string;
}

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;
  if (arr.length == 0) {
    return count;
  }
  let acceptedSmiles = [
    ":D",
    ":-D",
    ":~D",
    ":)",
    ":-)",
    ":~)",
    ";-D",
    ";D",
    ";~D",
    ";~)",
    ";-)",
    ";)",
  ];
  console.log(arr);
  for (let smiles = 0; smiles < arr.length; smiles++) {
    if (acceptedSmiles.includes(arr[smiles])) {
      count++;
    }
  }
  console.log(count);
  return count;
}

function findMissingLetter(array) {
  let first = array[0].charCodeAt(0);
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i);
    }
  }
  throw new Error("Invalid input");
}

function twinPrime(n) {
  console.log("n", n);
  //   n=10
  // go through n and take out all prime numbers
  // prime numbers are numbers that only can be divided by themselves
  if (n < 2) {
    console.log("less");
    return 0;
  }
  let isPrime = true;
  let arr = [];
  let isPrimearray = [];
  for (let i = 2; i <= n + 1; i++) {
    arr.push(i);
  }
  for (let j = 0; j < arr.length; j++) {
    //     console.log(j)
    isPrime = true;
    for (let m = 2; m <= j; m++) {
      if (arr[j] % m === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime == true) {
      isPrimearray.push(arr[j]);
    }
  }
  console.log(isPrimearray);
  let count = 0;
  for (let i = 0; i < isPrimearray.length; i++) {
    if (isPrimearray[i] + 2 == isPrimearray[i + 1]) {
      count++;
    }
  }
  console.log(count);
  return count;
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

function twinPrime(n) {
  let twinPrimeCount = 0;
  for (let i = 1; i <= n - 1; i++) {
    if (isPrime(i) && isPrime(i + 2)) twinPrimeCount++;
  }
  return twinPrimeCount;
}

function testing() {
  let arr = Array.from({ length: 5 }, (v, i) => v);

  console.log(arr);
}

function solution(string) {
  let alreadySplit = false;
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let leftString = "";
  let rightString = "";
  let currentIndex = 0;
  let ind = [0];

  let arr = Array.from(string);
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    if (code < 90 && code > 64) {
      ind.push(i);
    }
  }
  ind.push(string.length);
  console.log(ind);
  for (let i = 0; i < ind.length - 1; i++) {
    leftString += string.slice(ind[i], ind[i + 1]) + " ";
    console.log(leftString);
  }
  // console.log(leftString)
  return leftString.trim();
}

function solution(string) {
  let arr = [];
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      arr.push(" ");
      arr.push(string[i]);
    } else {
      arr.push(string[i]);
    }
  }
  return arr.join("");
}

function likes(names) {
  let stri = "likes this";

  if (names.length == 0) {
    return `no one ${stri}`;
  }
  let res = "";
  let len = names.length;

  switch (true) {
    case len == 1:
      console.log("he");
      res = `${names[0]} ${stri}`;
      console.log(res);
      break;
    case len == 2:
      res = `${names[0]} and ${names[1]} like this`;
      break;
    case len == 3:
      res = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    case len > 3:
      res = `${names[0]}, ${names[1]} and ${Math.floor(
        names.length - 2
      )} others like this`;
      break;
  }
  return res;
  // TODO
}

function posAverage(s) {
  let arr = s.replace(/\s*,\s*/g, ",").split(",");
  console.log(arr);
  let windowStart = 0;
  let windowEnd = 1;
  let similarPosition = 0;
  let smallerLetterValues = 0;
  let nextS = [];
  while (windowStart < arr.length - 2) {
    //     console.log(windowStart)
    if (windowEnd === arr.length) {
      //       console.log('wi',windowEnd)
      windowStart++;
      windowEnd = windowStart + 1;
    }
    //     console.log(windowStart, windowEnd);
    let orignialValue = arr[windowStart].split("");

    nextS = arr[windowEnd].split("");
    //     console.log(orignialValue,nextS)

    for (
      smallerLetterValues = 0;
      smallerLetterValues < nextS.length;
      smallerLetterValues++
    ) {
      //loop through the whole array
      // now we need to go to each individual value in the arr

      if (orignialValue[smallerLetterValues] === nextS[smallerLetterValues]) {
        similarPosition++;
        //         console.log(orignialValue[smallerLetterValues])
      }
      //       console.log(smallerLetterValues,nextS)
    } // end of loop through each number in substring
    smallerLetterValues = 0;

    windowEnd++;

    console.log("sP", similarPosition);
  }
  console.log("len", nextS.length);

  let n = (arr.length * (arr.length - 1)) / 2;

  console.log(n);

  return (similarPosition / (n * arr.length * nextS.length)) * 1000;
  // your code
}

let ans = posAverage(
  "466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"
);
console.log(ans);
function persistence(num) {
  // take the num split it multiply the digits
  //store new multiplied in vairable
  // check if it still has len>1 then split and repeat process
  num = num.toString();
  let count = 0;
  while (num.length > 1) {
    let product = 1;
    for (let i = 0; i < num.length; i++) {
      product *= num[i];
    }
    num = product.toString().split("").map(Number);
    count++;
  }
  return count;
  //code me
}

function isValidWalk(walk) {
  let opposites = {
    n: "s",
    w: "e",
    s: "n",
    e: "w",
  };
  let dic = {};
  let numberOfDirections = 0;
  let bool = false;
  if (walk.length != 10) {
    return bool;
  }
  console.log(walk);
  for (let direction = 0; direction < walk.length; direction++) {
    dic[walk[direction]] += 1;
    if (!dic[walk[direction]] >= 1) {
      dic[walk[direction]] = 1;
    }
  }
  console.log(dic);
  console.log(opposites);
  for (var k in dic) {
    if (dic[k] == dic[opposites[k]]) {
      console.log(dic[k], dic[opposites[k]]);
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }

  //insert brilliant code here
}

function isAValidMessage(message) {
  // split message into numbers and the words
  //use number to verify if same as length, have boolen set to true but if one is not same lenght
  //set bool to false and return
  let number = 0;
  let numbers = [];
  let words = [];
  let dict = {};
  let word = "";
  for (let i = 0; i < message.length; i++) {
    console.log(message[i]);
    if (message[i].match(/\d+/) && message[i + 1].match(/\d+/)) {
      number = message[i] + message[i + 1];
      //        dict[number]=0

      console.log("number", number);

      word = "";
      i++;
    } else if (message[i].match(/\d+/)) {
      console.log("elseif", message[i]);
      number = message[i];
      //        dict[number]=0

      word = "";
    } else {
      word += message[i];

      console.log("word", word);
      dict[word] = number;
    }

    //   dict[word]=number

    console.log(dict);
  }
}

function findChildren(dancingBrigade) {
  let sor = dancingBrigade.split("");
  let m = sor.map((le) => le.toLowerCase()).sort();
  let currentLetter = "";
  let arr = [];
  console.log(m);
  for (let i = 0; i < m.length; i++) {
    console.log(currentLetter);
    if (
      m[i] != currentLetter.toLowerCase() &&
      m[i] != currentLetter.toUpperCase()
    ) {
      console.log(m[i]);
      currentLetter = m[i].toUpperCase();
      console.log(currentLetter);
      arr.push(currentLetter);
    } else {
      currentLetter = m[i];
      arr.push(m[i]);
    }
  }
  console.log(arr.join(""));
  return arr.join("");
}

// return the number of small chocolates required to achieve
// the desired goal. Return -1 if the goal cannot be achieved
function makeChocolates(small, big, goal) {
  let currentSmall = small;
  let currentBig = big;
  if (small * 2 + big * 5 >= goal) {
    while (goal > 0) {
      if (goal % 5 == 0 && currentBig != 0) {
        goal -= 5;
        currentBig--;
      } else if (currentSmall != 0 && goal > 1) {
        goal -= 2;
        currentSmall--;
      } else {
        return -1;
      }
    }
  } else {
    return -1;
  }
  console.log(goal);
  console.log(small - currentSmall);
  return small - currentSmall;

  //   return -100;
}

function findUs(n1, n2, k, factors, digits) {
  let range = n1 + n2 * k;

  let re = [];

  let boo = 0;
  let numbers = [];
  let factorsStart = 0;
  let digitStart = 0;

  // [30,36,42,etcc] factors=[2,4] digitd=[2,6]

  for (let n = n1; n <= range; n++) {
    for (let j = 0; j < factors.length; j++) {
      if (n % factors[j] == 0 && n.toString().indexOf(digits[j]) > -1) {
        boo++;
      } else {
        boo--;
      }
    }
    if (boo == factors.length) {
      re.push(n);
      boo = 0;
    } else {
      boo = 0;
    }
  }

  return re;
}

function sumDigNthTerm(initval, patternl, nthterm) {
  var sum = initval;
  for (var i = 0; i < nthterm - 1; i++) {
    sum += patternl[i % patternl.length];
  }
  return sum
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
}
function amountOfPages(summary) {
  // p-summary = number of total digits the book has
  //return how many digits it takes to get to the summary
  // ex: summary = 25 so 1 to 17 is 25 digits
  // print values and count how mant digits until value reaches summary
  // more then 9 the digits are split and count each one then return last value after summary is reached

  let digits = 0;
  for (let i = 1; i <= summary; i++) {
    digits += i.toString().length;
    if (digits === summary) {
      digits = i;
      break;
    }
  }
  console.log(digits);
  return digits;
}

function uniqCounts(xs) {
  // if they are all unique take length and multiply until 1 from len
  // if not unique just take the length
  // permutation = length *length-1/number each letter shows up
  console.log(xs);
  let len = BigInt(xs.length);
  let set = xs.toUpperCase().split("");

  let dict = {};
  let top = 1n;
  let bottom = 1n;
  while (len > 0) {
    top *= len;
    len--;
  }
  for (let i = 0; i < set.length; i++) {
    dict[set[i]] = dict[set[i]] ? (dict[set[i]] += 1n) : 1n;
  }
  // set.forEach(s=>dict[s]=dict[s]?dict[s]+1n:1n)
  console.log(xs, dict);
  for (const key in dict) {
    // ex= {A:2n,B:3n}
    while (dict[key] > 1n) {
      //2n>1
      bottom *= dict[key]; // bottom =1n and A= 2n ,1n*=2n,bottom=2n A was 2n then 1n so 2n*=1n
      dict[key]--;
    } // goes to next key after while loop no longer is true
  }

  let ans = top / bottom;
  return ans;
}
// let un=uniqCounts("ABcDEFgHIJbaslidbailsbdilasbdkanmsdklhkbHSJKHVDASH")
// console.log(un)

function uniqCount(xs) {
  const str = xs.toUpperCase().split("");
  const size = BigInt(str.length);
  const fact = (x) => {
    x < 2n ? 1n : x * fact(x - 1n);
  };
  console.log(fact);
  let reps = {};
  str.forEach(
    (letter) => (reps[letter] = reps[letter] ? reps[letter] + 1n : 1n)
  );

  const perm = fact(size);
  const dups = Object.values(reps)
    .filter((r) => r > 1n)
    .map((r) => fact(r))
    .reduce((total, rep) => total * rep, 1n);
  // .map(r=>fact(r)) .reduce((total, rep)=> total*rep, 1n);
  console.log(reps);

  console.log(perm);

  // return perm/dups;
}

//Binary tree search for target

function binarySearch(node, target) {
  console.log("bin");
  if (node.val == null) {
    return false;
  } else if (node.value === target) {
    //base case where we stop recurrsion
    return true;
  } else {
    if (node.value >= target) {
      return binarySearch(node.left, target);
    } else if (node.value < target) {
      return binarySearch(node.right, target);
    }

    // still to come
  }
}
// console.log(binarySearch([10,5,12,4,7,11,9],4))

var moveZeroes = function (nums) {
  let p1 = 0;
  let val = 0;
  for (let p2 = 0; p2 < nums.length; p2++) {
    if (nums[p2] != 0) {
      val = nums[p2];
      nums[p2] = 0;
      nums[p1] = val;
      p1++;
    }
  }

  console.log(nums);
  // return nums
};

var reverseArrayInPlace = function (arr) {
  let start = 0;
  let currentVal = 0;
  for (let i = arr.length - 1; i >= arr.length / 2; i--) {
    currentVal = arr[start];
    arr[start] = arr[i];
    arr[i] = currentVal;
    start++;
    console.log(currentVal);
  }
  console.log("arr", arr);
};
reverseArrayInPlace([1, 2, 3, 4]);

const recursive = function (num) {
  let val = 1;
  if (num == 1) {
    return num;
  } else {
    return recursive(num - 1) * num;
  }
};

const DPF = function (numArray, key) {
  // return true or false if key is in numArray
  //start in middle of the sorted array if numArray[index]>key then move left, if < move right
  // brute force could do numArray.includes(key)!=-1 return true
 let keyIsFound = true
 let midIdx = Math.floor(numArray.length/2)
 let middleElement =numArray[midIdx]
 if(middleElement==key){
  return keyIsFound
 }else if(middleElement > key && numArray.length>1){
  return DPF(numArray.splice(0,midIdx),key)

 }else if(middleElement<key && numArray.length>1){
  return DPF(numArray.splice(midIdx,numArray.length-1),key)
 }else{
  keyIsFound = false
  return keyIsFound
 }

};

/* Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
binary search tree.
*/
var sortedArrayToBST = function(nums) {
  // want to have equal nodes on both side to get balanced 
  //or height of one side cant be more then 1 more then other side 
 // need base case to return val
 // need recursive helper function
 //sorted arrray = BST
 // mid == root node of tree left of array is left of root , right of array is right of root
 if (nums.length===0){
     return null
 }
  function helperFunction(nums,left,right){
      if(left>right){
          return null
      }
      let midPoint = Math.floor(left+(right-left)/2)
      console.log(nums[midPoint])
      let node= new TreeNode(nums[midPoint])

      node.left=helperFunction(nums,left,midPoint-1)
      node.right = helperFunction(nums,midPoint+1,right)
      console.log(node.val)
      return node
  }

 return helperFunction(nums,0,nums.length-1)


  
};

// practice recursion with fibonocci

const Fib = function(position){
  // [1,1,2,3,5,8]
 if(position<3){
  return 1
 }else{
  return Fib(position-1)+Fib(position-2)
 }
}
console.log(Fib(4))

//  fib(4-1)+fib(4-2) - fib(3)+fib(2)-fib(2)+fib(1)+fib(2)-1+1+1
//fib(3-1)+fib(3-2)-fib(2)+fib(1)-1+2
//fib(2-1)+fib(2-2) - fib(1)+fib(0)-1+1
//fib(3)-- fib(2)+fib(1)- 1+1 = 2
//fib(4)-- fib(3)+fib(2)-2+1 =3 
//fib(5)== fib(4)+fib(3)= 3+2 = 5
//fib(6) == fib(5)+fib(4) = 5 +3 = 8

const fibMemo = function(index,cache){
 cache = cache||[]
  if(cache[index]){
    return cache[index]
  }else{
    if(index<3){
      return 1
    }else{
      cache[index]=fibMemo(index-1,cache)+fibMemo(index-2,cache)
  }
    }
    console.log(cache)
    return cache[index]
}
console.log(fibMemo(5))

const twoSums = function(numArray,sum){
  //numArray = [1,6,3,4,4],sum =7
  // dict {1:6 compliment}
  // get array val subtract from sum see if its compliment is in dict if so push the val and compliment
  let complimnets ={}
  let comArray =[]
  for(let i=0;i<numArray.length;i++){
    if(complimnets.hasOwnProperty(numArray[i])){
      comArray.push([numArray[i],complimnets[numArray[i]]])
    }else{
      complimnets[sum-numArray[i]]=numArray[i]
    }
  }
  console.log(comArray)
}
// twoSums([1,6,3,4,4,5],7)

const twoSumsNoDuplicate = function(numArray,sum){
  //numArray = [1,6,3,4,4],sum =7
  // dict {1:#of ones available compliment}
  // get array val subtract from sum see if its compliment is in dict if so push the val and compliment
  let complimnets ={}
  let comArray =[]
  for(let i=0;i<numArray.length;i++){
    if(complimnets.hasOwnProperty(sum-numArray[i])){
      if(complimnets[sum-numArray[i]]>=1){
        complimnets[sum-numArray[i]]--
        comArray.push([numArray[i],sum-numArray[i]])
        if(complimnets[sum-numArray[i]]<1){
          delete complimnets[sum-numArray[i]]
        }
      }
      
    }else{
      complimnets[numArray[i]]=1
    }
    console.log(complimnets)
  }
  console.log(comArray)
}
twoSumsNoDuplicate([1,6,3,5,4],7)
// using memoization to find the fibnoci value at index
//O(N) utilizing cache
const Fibmemo = function(index){
  //create a cache of indexes seen
  let cache = []
  if(index<3){
    return 1
  }else{
    if(cache[index]){
      return cache[index]
    }else{
      cache[index]=Fibmemo(index-1)+Fibmemo(index-2)
    }
  }
  return cache[index]
}


//Sieve of Erastosthenes
const primeValues = function(n){
    let primeArray = [2,]
    for(let i=3;i<=n;i +=2){
      if(i %2 !=0){
        primeArray.push(i)
      }
    }
    return primeArray
}
console.log(primeValues(20))

const sieve = function(n){
  // mark all values as true from 2 to n
  // then go through each and find mutliples of 2 to n and mark as false notprime
  //loop through that and push values marked true into primes array
  // false = not prime
  let fir = []
  for(let i =0;i<=n;i++){
    fir.push(true)
  }
  console.log(fir)
  fir[0]=false
  fir[1]=false
  // go through each val and if multiple then its not prime
  for(let i =2;i<Math.sqrt(n);i++){
    for(let j = 2;i*j<=n;j++){
      fir[i*j]=false
    }
  }

  let prime=[]
  for(let i =2;i<=fir.length;i++){
    if(fir[i]){
      prime.push(i)
    }
  }
  console.log(prime)

}
sieve(20)

// traversing a bonary tree

// class BinarySearchTree:
//     def __init__(self, value):
//         self.value = value
//         self.left_child = None
//         self.right_child = None

//     def find_node(self, value):
//         if value < self.value and self.left_child: // this code is checking if value is less then current node and if that node has a left child--self.left_child .if so recurssion on left starts
//             return self.left_child.find_node(value)
//         if value > self.value and self.right_child:
//             return self.right_child.find_node(value)

//         return value == self.value

const grid = function(m,n){
  //can traverse right m times and down n times
  if(m ==1 || n==1){
    return 1
  }
  let numberOfPaths=0
  for(let i =0;i<m;i++){

  }
}



// Javascript program to count all possible paths from
// top left to top bottom right using
// Recursive Dynamic Programming
 
// Create an empty 2D table
let DP = new Array(4);
for(let i = 0; i < 4; i++) {
     
    DP[i] = new Array(4);
    console.log('DP',DP)
    for(let j = 0; j < 4; j++) {
        DP[i][j] = 0;
    }
}
 
// Returns count of possible paths to reach
// cell at row number m and column number n from
// the topmost leftmost cell (cell at 1, 1)
function numberOfPaths(n, m, DP){
 
    if(n == 1 || m == 1)
        return DP[n][m] = 1;
     
    // Add the element in the DP table
    // If it was not computed before
    if(DP[n][m] == 0)
        console.log(DP,n,m)
        DP[n][m] = numberOfPaths(n - 1, m,DP) + numberOfPaths(n, m - 1,DP);

    return DP[n][m];
}
// binary tree DFS problem

/*
 * Complete the 'numPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY warehouse as parameter.
 */

function numPaths(warehouse) {
  // Write your code here
  // can move either right or down
  // 1= indicates open section 0= blocked section
  // return number of paths through the matrix
  // traversing through tree or DFS
  // console.log(warehouse)
  // row and column 
  // row-1,colum + colum-1 ,row
  // (0,0)
  // if m or n ===1 
  // while traversing check nodes value if 1 return 1 
  // if 0 return 0 
  // length of array = column
  // length of subarrays = row
  let col = warehouse.length
  let row = warehouse[1].length

  let DS = new Array(col);
  for (let i = 0; i < DS.length; i++) {
      DS[i] = new Array(row);
  }
  
  // returns number of paths from (0, 0) to (col, row)
  function helper(col,row){
      //console.log(" col is ", col, "row is ", row)

      // if you are at (0, 0), there's nowhere else to go, so you check if (0,0) is open and return 1 if it is "open" (i.e. warehouse[0][0] = 1)
      if(warehouse[col][row]===0){
          return 0
      }
      
      // base case return 1 when we get to bottom 
      if(col === 0 && row === 0) {  
          return 1
      }
             
      // store recusrive call in data structure 
      //DS[col][row] = helper(col, row)
      // if ( DS[col][row]){return DS[col][row]}
      //   else (DS[col][row] =  (execute the logic to obtain the value) )
      // console.log('DS',DS[col][row])
      if(DS[col][row]){
          console.log("Hi I work for ", col, ", ", row, " value cached is ",  DS[col][row])
          return DS[col][row]
      }else{
          
          let returnValue = 0;
          if(row >0){
              returnValue += helper (col, row-1)
          }
          // if (can go to the left), returnValue += helper(col-1, row)
          if(col>0){
              returnValue += helper (col-1, row)
          }
    
          console.log('re', returnValue)
          DS[col][row] = returnValue
          console.log('DS',DS[col][row])
          return returnValue
      }
  }
  
  return helper (col - 1, row - 1);


}

// linked list practice
class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList{
  
    constructor(value){
      const NewNode = new Node(value)
      this.head = NewNode
      this.tail = NewNode
      this.length = 1
    }
  
  
}
const newNode = new LinkedList(4)
const newNode2 = new LinkedList(45)
console.log(LinkedList)

// utiliozing fast and slow method on loopy linked list
// find happy number

function isHappyNumber(n){
  // your code will replace this placeholder return statement
  let slow = sumDigits(n)
  let fast = sumDigits(slow)

  while(slow!=fast){
      slow=sumDigits(slow)
      fast=sumDigits(sumDigits(fast))
  }
  return slow == 1
}
function sumDigits(number) {
  let totalSum = 0;
  while (number > 0) {
      let temp = Math.floor(number / 10),
          digit = number % 10;
      number = temp;
      totalSum += digit ** 2;
  }
  return totalSum;
}
//Arthimetic progression

function arithmeticSequenceElements(a,r,n) {
  var ret = [a]
  while (--n) ret.push(a+=r);
  return ret.join(', ')
}


function sum(arr){
  console.log(arr)
 if(arr.length==0){
  return 0
 }
 return arr[0]+ sum(arr.slice(1))
}

// practice quick sort
function quickSort(arr){
  if(arr.length<2){
    return arr
  }
  let pivot = arr[0]
  let lesser =[]
  let greater =[]
  for(let i = 1;i<arr.length;i++){
    if(arr[i]<=pivot){
      lesser.push(arr[i])
    }else{
      greater.push(arr[i])
    }
  }
  return quickSort(lesser).concat(pivot,quickSort(greater))
}
console.log('quick', quickSort([4,5,3]))

var longestConsecutive = function(nums) {
  // find all values that are right after each other
  //  create set to reove duplicates
  // check if the num in nums is start of a sequence
  // if it is then increase by 1 and see if it nums has num+1 and so on
  let set = new Set(nums)
  let longest = 0
  for(const num of nums){
      if(!set.has(num-1)){
          let length =0
          while(set.has(num+length)){
              length++
              longest = Math.max(length,longest)
          }
      }
  }
  return longest
};