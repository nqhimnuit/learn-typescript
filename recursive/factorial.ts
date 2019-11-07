function factirial(n: number): number {
    if (n == 1) {
        return 1;
    }
    return n * factirial(n -1);
}

console.log(factirial(6));
