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
            max_profit=Math.max(maxProfit,prices[r]-prices[l])
        }
    }
    return max_profit
}