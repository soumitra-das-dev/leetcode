function twoSum(nums: number[], target: number): number[] {
    let indices = [];
    nums.map((num, idx) => {
        let idx1 = nums.indexOf(target - num);
        if (idx1 != -1 && idx1 != idx) {
            indices = [idx, idx1]
        }
    })
    return indices
};