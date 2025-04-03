/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let largestStr = ""
    let map = {};
    let str = "";

    for(let i=0; i< s.length; i++){
        const currentChar = s[i]
        if(map[currentChar]){
            if(largestStr.length < str.length){
                largestStr = str
            }
            while(map[currentChar]){
                delete map[str.at(0)];
                str = str.slice(1);
            }
        }
        map[currentChar] = true;
        str += currentChar;
        
    }
    if(largestStr.length < str.length){
        largestStr = str
    }
    return largestStr.length;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end