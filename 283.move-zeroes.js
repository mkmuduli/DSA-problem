/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} numArr
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(numArr) {
    let lastZeroPos = 0;

    for (let i = 0; i < numArr.length; i++) {
       if(numArr[i] !== 0) {
        const temp = numArr[lastZeroPos];
        numArr[lastZeroPos] = numArr[i];
        numArr[i] = temp;
        lastZeroPos++;
       }
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = moveZeroes;
// @after-stub-for-debug-end