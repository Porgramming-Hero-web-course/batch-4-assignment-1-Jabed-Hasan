function sumArray(numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    
    console.log(sum);
    return sum;
}

//Sample Input
sumArray([1, 2, 3, 4, 5]);
