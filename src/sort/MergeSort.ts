import { Sort } from "./Sort";
import { SortHelper } from "./SortHelper";

export class MergeSort extends SortHelper implements Sort {

    sort(nums: number[]): number[] {
        if (nums.length <= 1) {
            return nums;
        }

        let left: number[] = [];
        let right: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            if (i < nums.length / 2) {
                left.push(nums[i]);
            }
            else {
                right.push(nums[i]);
            }
        }

        left = this.sort(left);
        right = this.sort(right);

        return this.merge(left, right);
    }

    merge(left: number[], right: number[]): number[] {
        let result: number[] = [];

        while (this.isNotEmptyArray(left) && this.isNotEmptyArray(right)) {
            if (left[0] < right[0]) {
                result.push(left[0]);
                left = left.slice(1);
            }
            else {
                result.push(right[0]);
                right = right.slice(1);
            }
        }

        while (this.isNotEmptyArray(left)) {
            result.push(left[0]);
            right = left.slice(1);
        }

        while (this.isNotEmptyArray(right)) {
            result.push(right[0]);
            right = right.slice(1);
        }

        return result;
    }
}
