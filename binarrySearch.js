
const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {

        let middle = Math.floor((start + end) / 2)

        if(arr[middle] < target) {
            start = middle + 1
        } else if (arr[middle] > target) {
            end = middle -1
        } else if(arr[middle] === target) {
            return middle
        }
    }
    return null
}
let result = binarySearch([1,2,3,4,5,6,7], 7);
console.log("target is located at index " , result);