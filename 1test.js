function biggestNumberInArray(arr) {
    var m = -Infinity,
      i = 0,
      n = arr.length;
    for (; i != n; ++i) {
      if (arr[i] > m) {
        m = arr[i];
      }
    }
    return m;
  }
let b=0
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
for (i of arr) {
    if (b<i) b=i; else b=b
}
console.log(b)
console.log(biggestNumberInArray(arr))
