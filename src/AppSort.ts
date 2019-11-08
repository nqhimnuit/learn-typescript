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

function sortAlgorithm(sortAlgorithm: Sort): void {
    if (isSortedArray(UNSORTED_ARRAY)) {
        console.error('!!! array is already sorted wont do anything !!!');
        return;
    }

    let start: number = Date.now();
    let sortedArray = sortAlgorithm.sort(UNSORTED_ARRAY);
    let timeTaken: number = Date.now() - start;

    let isSorted: boolean = isSortedArray(sortedArray);
    if (isSorted) {
        console.log(`--- Sorted with ${sortAlgorithm.sortName}, took ${timeTaken} ms`);
    }
    else {
        console.error('!!! cannot sort array !!!');
    }
}

function sortNumbers() {
    sortAlgorithm(new MergeSort());
    sortAlgorithm(new InsertionSort());
    sortAlgorithm(new BubbleSort());
}

sortNumbers();
