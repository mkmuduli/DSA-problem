/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 0;

    for (let num of nums) {
        if (count == 0) {
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }
    return candidate;


};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = majorityElement;
// @after-stub-for-debug-end