function sum(num) {
    let res = 0;
    for(let i = 1; i<=num; i++){
        res +=i;
    }
    return res;
}
console.log(sum(100));