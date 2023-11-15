//Practice Questions
//121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

var maxProfit = function(prices) {
    // find max profit so difference between two points
    // left point= buy right = sell
    // go through find lowest buy price and from there traverse array to find highest val to subtract from
    // return profit sell-buy
    let l=0
    let max_profit=0
    for(let r=1;r<prices.length;r++){
        // if current prices[r] < prices[l]switch 
        if(prices[r] < prices[l]){
            l=r
        }else{ // get max profit prices[r] sell is higher then prices[l]
            max_profit=Math.max(max_profit,prices[r]-prices[l])
        }
    }
    return max_profit
}
console.log(maxProfit([7,1,2,4]))

//two pointer
var isPalindrome = function(s) {
    // is s the same forward as it is backward
    // have two pointers on at beginning and one at end 
    // have them go from left and to right checking to see if the letters are same
    // until both l and r are at equal values 
    // first need to remove characters(spaces and alphnumerical)
    // if letter is same continue 
    // when there is a letter that isnt same return false 
    s=s.toLowerCase().replace(/[^a-z0-9]/gi, '')
    let l =0
    let output = true
    for(let r=s.length-1;r>l;r--){
        if(s[l]!=s[r]){
            output=false 
        }
        l++
    }
    console.log(output)
    return output
};
// does list include the words
function wordListtocheck(List,wordstocheck){
return List.map(input=>{
    if(check(input,wordstocheck)){
        return 'spam'
    }else{
        return 'not'
    }
})
}
function check(inputString,wordstocheck){
for(let word of wordstocheck){
    if(inputString.includes(word)){
        return true 
    }
}
}
console.log(wordListtocheck(['here to stay','does this work'],['to','none']))
//Leet code 2653
var getSubarrayBeauty = function(nums, k, x) {
    // go through array get subarray of the nums up to k length,
    // get the xth smalles value push to a new array
    // use sliding window since it wants subarray
    // array returned must be n-k+1 in length
    //once r+1 == k take subarray and find smallest val
    // then remove l vale and go up by one and that new subarray get its lowest
    // while length-l >k
    let arr=[]
    // how do i check xth value // sort value an get index of x-1
    let r=0
    let l=0
    while(r<nums.length||r-l>=k){
        // get subarray from r-l+1==k
        // sort that array get xth value and push to arr
        // remove nums[l]
        //l++
        // if nums[l] or nums[r] arent negative push a zero instead
        if(r-l+1==k){
            let subset = nums.slice(l,r+1)
            let sort = subset.sort(function(a,b){return a-b})
            arr.push(sort[x-1]>0?0:sort[x-1])
            l++
        }
        r++
    } 
    console.log(arr)
    return arr
};