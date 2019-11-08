import { Sort } from "./Sort";
import { SortHelper } from "./SortHelper";

export class InsertionSort extends SortHelper implements Sort {
    sortName: String = "Insertion Sort";

    sort(nums: number[]): number[] {
        let result: number[] = this.deepCopy(nums);
        let i = 1;
        while (i < result.length) {
            let tmp = result[i];
            let j = i - 1;
            while (j >= 0 && result[j] > tmp) {
                result[j + 1] = result[j];
                j = j - 1;
            }
            result[j + 1] = tmp;
            i++;
        }

        return result;
    }

}
