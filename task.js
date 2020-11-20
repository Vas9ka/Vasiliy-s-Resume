function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];
      
    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }


arr = []
for (let index = 0; index < 1001; index++) {
    element = Math.random() * 10
    arr.push(element)    
}

arr_sorted = quickSort(arr)
console.log(arr_sorted[arr_sorted.length-1])
function Search(arr){
    arr = quickSort(arr)
    max = arr[arr.length-1]
    min = arr[0]
    median = arr[Math.round(arr.length / 2)]
    return {'Max' : max, 'Min':min,'Median':median}
}
console.log(Search(arr))

