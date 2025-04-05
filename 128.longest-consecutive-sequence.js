/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    let maxLen = 0;
    const mapper = new Set(nums);

    for(let num of nums){
        if(!mapper.has(num-1)){
            let currentNum = num;
            let currentStreak = 1;

            while (mapper.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            maxLen = Math.max(maxLen, currentStreak);
        }
    }
    return maxLen
};
// @lc code=end

