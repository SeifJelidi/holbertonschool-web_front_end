function countPrimeNumbers() {
    let n = 0;
    for (let i = 2; i <= 100; i++) {
        let pr = true;
        for (let s = 2; j <= parseInt(i / 2) + 1; s++) {
            if (i % s == 0) {
                pr = false;
        }
    }
        if (pr) {
            x = x + 1;
        }
    }
    return x + 1;
}
let before = performance.now();
countPrimeNumbers();
let after = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${after - before} milliseconds.`)
