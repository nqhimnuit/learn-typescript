import { BubbleSort } from "./sort/BubbleSort";
import { InsertionSort } from "./sort/InsertionSort";
import { MergeSort } from "./sort/MergeSort";
import { Sort } from "./sort/Sort";

const ARRAY_LENGTH = 10000;

const UNSORTED_ARRAY: number[] = initializeArray(ARRAY_LENGTH);
Object.freeze(UNSORTED_ARRAY);

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

function initializeArray(arrayLength: number): number[] {
    let nums: number[] = [];
    for (let i = 0; i < arrayLength; i++) {
        nums.push(getRandomInt(arrayLength));
    }
    console.log('unsorted array = ', nums);
    return nums;
}

function isSortedArray(nums: number[]): boolean {
    return nums.every(function (x, i) {
        return i === 0 || x >= nums[i - 1];
    });
}

function sortNumber(nums: number[], sortAlgorithm: Sort, check: (nums: number[]) => boolean): void {
    let start = Date.now();
    let sortedArray = sortAlgorithm.sort(nums);
    let timeTaken = Date.now() - start;
    if (check(sortedArray)) {
        console.log(`--- sorted array with ${sortAlgorithm.sortName} took ${timeTaken} ms`);
    }
    else {
        console.log('!!! cannot sort array !!!');
    }
}

sortNumber(UNSORTED_ARRAY, new MergeSort(), isSortedArray);
sortNumber(UNSORTED_ARRAY, new InsertionSort(), isSortedArray);
sortNumber(UNSORTED_ARRAY, new BubbleSort(), isSortedArray);
