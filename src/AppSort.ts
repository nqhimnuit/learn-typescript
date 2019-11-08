import { BubbleSort } from "./sort/BubbleSort";
import { InsertionSort } from "./sort/InsertionSort";
import { MergeSort } from "./sort/MergeSort";
import { Sort } from "./sort/Sort";

const ARRAY_LENGTH = 10000;

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

function sortNumbers(unsortedArray: number[]) {
    Object.freeze(unsortedArray);

    function sortAlgorithm(sortAlgorithm: Sort) {
        let start: number = Date.now();
        const sortedArray = sortAlgorithm.sort(unsortedArray);
        let timeTaken = Date.now() - start;
        if (isSortedArray(sortedArray)) {
            console.log(`--- used ${sortAlgorithm.sortName} to sort array, took ${timeTaken} ms`);
        }
        else {
            console.error('!!! cannot sort array !!!');
        }
    }

    return {
        mergeSort: () => { sortAlgorithm(new MergeSort()) },
        insertionSort: () => { sortAlgorithm(new InsertionSort()) },
        bubbleSort: () => { sortAlgorithm(new BubbleSort()) }
    }
}

let sort = sortNumbers(initializeArray(ARRAY_LENGTH));
sort.mergeSort();
sort.bubbleSort();
sort.insertionSort();
