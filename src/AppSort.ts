import { BubbleSort } from "./sort/BubbleSort";
import { InsertionSort } from "./sort/InsertionSort";
import { SortHelper } from "./sort/SortHelper";

let unsortedNums: number[] = [3, 4, 5, 2, 1];

function sortNumbers(unsortedNums: number[]) {
    let bubbleSort = new BubbleSort();
    bubbleSort.sort(unsortedNums);
}

function otherSortNumbers(unsortedNums: number[]) {
    let insertionSort = new InsertionSort();
    insertionSort.sort(unsortedNums);
}

function swap() {
    let nums: number[] = [3, 4, 1, 2];
    let sortHelper = new SortHelper();
    sortHelper.xorSwap(nums[0], nums[2]);

    console.log(`after xor swap: ${nums[0]} vs ${nums[2]}`);

    [nums[0], nums[2]] = sortHelper.swap(nums[0], nums[2]);
    console.log(`after destructing swap: ${nums[0]} vs ${nums[2]}`);
}

sortNumbers(unsortedNums);

otherSortNumbers(unsortedNums);

swap();
