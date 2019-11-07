import { Sort } from "./Sort";
import { SortHelper } from "./SortHelper";

export class InsertionSort extends SortHelper implements Sort {

    sort(nums: number[]): number[] {
        let i = 1;
        while (i < nums.length) {
            let tmp = nums[i];
            let j = i - 1;
            while (j >= 0 && nums[j] > tmp) {
                nums[j + 1] = nums[j];
                j = j - 1;
            }
            nums[j + 1] = tmp;
            i++;
        }

        return nums;
    }

}
