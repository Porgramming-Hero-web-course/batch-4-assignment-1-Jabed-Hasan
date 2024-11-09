function removeDuplicates(arr: number[]): number[] {
  const uniqueArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;


    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
        break; 
      }
    }

    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr);
  return uniqueArr;
}

// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
