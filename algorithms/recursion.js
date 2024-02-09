// ------ implementation of recursion ---------
// factorial of number function
function factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// fibonacci iterative
function fibonacciIterative(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    let fibMinus2 = 0;
    let fibMinus1 = 1;
    let fibN = n;
    for (let i = 2; i <= n; i++) {
        fibN = fibMinus1 + fibMinus2;
        fibMinus2 = fibMinus1;
        fibMinus1 = fibN;
    }
    return fibN;
}

// fibonnaci recursive
function fibonnaciRecursive(n) {
    // the sequence is 0, 1, 1, 2..
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fibonnaciRecursive(n - 1) + fibonnaciRecursive(n - 2);
}

// fibonnaci with memoization optimation technique
function fibonacciMemo(n) {
    const memo = [0, 1];
    const fibonnaci = (n) => {
        if (memo[n] != null) return memo[n];
        return memo[n] = fibonnaci(n - 1, memo) + fibonnaci(n - 2, memo);
    };
    return fibonnaci(n);
}


console.log(factorial(5));
console.log(fibonacciIterative(6));
console.log(fibonnaciRecursive(6));
console.log(fibonacciMemo(20));