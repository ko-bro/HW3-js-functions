console.log('------------- # 4')
function sum(a, b) {
    return a + b;
}

let result_sum = sum(2, 2);
console.log(result_sum);

function subtr(a, b) {
    return a - b;
}
let result_subtr = subtr(5, 3);
console.log(result_subtr);

function mltplic(a, b) {
    return a * b;
}

let result_mlt = mltplic(3, 5);
console.log(result_mlt);

function division(a, b){
    return a / b ;
}

let result_div = division(6, 3);
console.log(result_div);


console.log('------------- # 5')

function count(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
}

count(7);

console.log('------------- # 6')

function countDown(number) {
    for (let i = 1; i <= number; number--) {
        console.log(number);
    }
}

countDown(8);



console.log('------------- # 7')
function pow(x,n) {
    let total = x;

    for (let i = 1; i < n; i++) {
        total *= x;
    }

    return total;
}
let powValue = pow(3,2);
console.log(powValue);

console.log('------------- # 8')
function isBigger(a, b) {
    let result;
    if (a > b) {
        result = valid();
    } else {
        result = invalid();
    }
    return result;
}

let totalValue = isBigger(5,3)
console.log(totalValue);

function valid() {
    return true;
}

function invalid() {
    return false;
}

console.log('------------- # 9')

function isSmaller(a, b) {
    let result;
    if (a < b) {
        result = valid();
    } else {
        result = invalid();
    }
    return result;
}

let sumValue = isSmaller(2,3)
console.log(sumValue);