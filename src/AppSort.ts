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
  console.log('unsorted array initialized!');
  return nums;
}

function isSortedArray(nums: number[]): boolean {
  return nums.every(function (x, i) {
    return i === 0 || x >= nums[i - 1];
  });
}

function sortWithAlgorithm(nums: any, sortAlgorithm: Sort) {
  if (isSortedArray(nums)) {
    throw `array is already sorted before using algorithm ${sortAlgorithm.sortName}`
  }

  let start: number = Date.now();
  const sortedNums: number[] = sortAlgorithm.sort(<number[]>nums);
  let timeTaken: number = Date.now() - start;

  console.log(`${sortAlgorithm.sortName} took ${timeTaken} ms to sort`);

  if (isSortedArray(sortedNums)) {
    return nums;
  }

  return 'there is something wrong with sort algorithm';
}

new Promise(
  (resolve, reject) => {
    let unsortedArray = initializeArray(30000);
    if (!isSortedArray(unsortedArray)) {
      resolve(unsortedArray);
    }
    else {
      reject('initialized array is already sorted, nothing to do');
    }
  })
  .then(
    (unsortedArray) => sortWithAlgorithm(unsortedArray, new BubbleSort),
    (error) => { throw `there is something wrong: '${error}'` })
  .then(
    (unsortedArray) => sortWithAlgorithm(unsortedArray, new MergeSort),
    (error) => { throw `there is something wrong: '${error}'` })
  .then(
    (unsortedArray) => sortWithAlgorithm(unsortedArray, new InsertionSort),
    (error) => { throw `there is something wrong: '${error}'` })
  .then(
    (nums) => { console.log('sorting successful!') })
  .catch(function (error) { console.log(error) });
