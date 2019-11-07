import { BubbleSort } from "./sort/BubbleSort";
import { InsertionSort } from "./sort/InsertionSort";
import { MergeSort } from "./sort/MergeSort";

let unsortedNums: number[] = [];

const ARRAY_LENGTH = 10;

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

function initializeArray() {
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        unsortedNums.push(getRandomInt(ARRAY_LENGTH));
    }
    console.log('unsorted array = ', unsortedNums);
}

function sortNumbers(unsortedNums: number[]) {
    initializeArray();

    let start: number = (new Date()).getMilliseconds();
    // console.log('Sorting with buble sort:');
    // let bubbleSort = new BubbleSort();
    // console.log(bubbleSort.sort(unsortedNums));

    // let insertionSort = new InsertionSort();
    // console.log(insertionSort.sort(unsortedNums));
    // let end: number = (new Date()).getMilliseconds();
    // let timeTaken = end - start;
    // console.log(`Sort with insertion sort took ${timeTaken} ms`);

    console.log('Sorting with merge sort');
    let mergeSort = new MergeSort();
    console.log(mergeSort.sort(unsortedNums));
}

sortNumbers(unsortedNums);
