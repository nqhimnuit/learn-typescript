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

new Promise(
  (resolve, reject) => {
    let unsortedArray = initializeArray(2);
    if (!isSortedArray(unsortedArray)) {
      resolve(unsortedArray);
    }
    else {
      let errorMsg = 'array is already sorted, nothing to do';
      reject(errorMsg);
    }
  })
  .then(
    function (nums) {
      let mergeSort: Sort = new MergeSort();
      const sortedNums: number[] = mergeSort.sort(<number[]>nums);
      console.log('sorting is done');
      if (isSortedArray(sortedNums)) {
        return sortedNums;
      }
      return "there is something wrong with sort algorithm";
    },
    function (error) {
      throw `there is something wrong with sort algorithm: '${error}'`;
    })
  .then(
    (nums) => { console.log('sorting successful: ', nums) })
  .catch(function (error) { console.log(error) });
