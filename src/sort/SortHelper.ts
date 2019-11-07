export class SortHelper {

    /**
     * swap two numbers using 'xor swap algorithm'
     */
    xorSwap(a: number, b: number): void {
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
    }

    /**
     * swap two numbers using 'destructing' feature of ES6
     */
    swap(a: number, b: number): number[] {
        return [b, a];
    }

    /**
     * check for a pair number is in order or not
     * @param small smaller number
     * @param large larger number
     */
    isNotInOrder(small: number, large: number): boolean {
        return small > large;
    }

    isNotEmptyArray(array: number[]): boolean {
        return (array && array.length) !== 0;
    }

}
