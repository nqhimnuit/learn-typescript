import { Sort } from "./Sort";
import { SortHelper } from "./SortHelper";

export class BubbleSort extends SortHelper implements Sort {

    sort(nums: number[]): number[] {
        let n = nums.length;
        do {
            let newn = 0;
            for (let i = 1; i < n; i++) {
                if (this.isNotInOrder(nums[i - 1], nums[i])) {
                    [nums[i - 1], nums[i]] = this.swap(nums[i - 1], nums[i]);
                    newn = i;
                }
            }
            n = newn;
        }
        while (n > 1);

        return nums;
    }

}
