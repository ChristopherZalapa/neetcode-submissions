class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = {}
        for(let number of nums) {
           if(number in obj) {
            return true
           } else {
            obj[number] = number
           }
        }
           return false
    }
}
