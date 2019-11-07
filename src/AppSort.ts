import { BubbleSort } from "./sort/BubbleSort";
import { InsertionSort } from "./sort/InsertionSort";
import { MergeSort } from "./sort/MergeSort";

let unsortedNums: number[] = [3, 4, 5, 2, 1];

function sortNumbers(unsortedNums: number[]) {
    let bubbleSort = new BubbleSort();
    bubbleSort.sort(unsortedNums);

    let insertionSort = new InsertionSort();
    insertionSort.sort(unsortedNums);

    let mergeSort = new MergeSort();
    mergeSort.sort(unsortedNums);
}

sortNumbers(unsortedNums);
