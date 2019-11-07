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

}
