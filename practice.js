console.log("hello")

/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.




Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

take list of numbers reverse them , remove the spaces
add them to another list that we reversed 
return the answer in a list and reversed
*/
/*
let lst1 = [2,4,3]
let lst2 = [5,6,4]
var addTwoNumbers = function(l1, l2) {
    reversed_lst1 = l1.reverse().join('')
    reversed_lst2 = l2.reverse().join('')
    new_value = parseInt(reversed_lst2) + parseInt(reversed_lst1)
    answer = (new_value).toString(10).split("").map(Number).reverse()

    console.log(answer)
};
addTwoNumbers(lst1,lst2)
*/

// to run go to terminal node <filename>
/*
function twoSums(nums,target){
    let values = []
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == target){

                console.log("in if statemtn")
                values.push(i,j)
                console.log(values)
            }
        }
    }
    return values
}
console.log("return",twoSums([2,8,10,7,11],9))
*/

// Given a string s, return the longest palindromic substring in s
//Input: s = "babad"
//Output: "bab"
//Explanation: "aba" is also a valid answer.

/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.*/

var isPalindrome = function(x) {
    let palindrome = parseInt(x.toString().split('').reverse().join('')) // convert x to string so it can be reversed 
    if(palindrome == x){
        return true 
        console.log("works")
    }
    else{
        return false 
    }
};
isPalindrome(121)