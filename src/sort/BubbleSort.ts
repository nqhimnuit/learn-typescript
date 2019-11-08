import { Sort } from "./Sort";
import { SortHelper } from "./SortHelper";

export class BubbleSort extends SortHelper implements Sort {
    sortName: String = "Bubble Sort";

    sort(nums: number[]): number[] {
        let result: number[] = this.deepCopy(nums);
        let n = result.length;
        do {
            let newn = 0;
            for (let i = 1; i < n; i++) {
                if (this.isNotInOrder(result[i - 1], result[i])) {
                    [result[i - 1], result[i]] = this.swap(result[i - 1], result[i]);
                    newn = i;
                }
            }
            n = newn;
        }
        while (n > 1);

        return result;
    }
}
