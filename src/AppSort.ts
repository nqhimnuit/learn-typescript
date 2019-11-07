import { BubbleSort } from "./sort/BubbleSort";
import { InsertionSort } from "./sort/InsertionSort";
import { MergeSort } from "./sort/MergeSort";

let unsortedNums: number[] = [3, 4, 5, 2, 1, 11];

function sortNumbers(unsortedNums: number[]) {
    console.log('Sorting with buble sort:');
    let bubbleSort = new BubbleSort();
    console.log(bubbleSort.sort(unsortedNums));

    console.log('Sorting with insertion sort:');
    let insertionSort = new InsertionSort();
    console.log(insertionSort.sort(unsortedNums));

    console.log('Sorting with merge sort');
    let mergeSort = new MergeSort();
    console.log(mergeSort.sort(unsortedNums));
}

sortNumbers(unsortedNums);
