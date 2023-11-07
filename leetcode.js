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