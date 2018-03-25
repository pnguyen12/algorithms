let array = [2,3,5,7,2,8,9,211,20,10,55,8,7,2];


const binary_search = (arr, value) => {
    let high = arr.length -1;
    let low = 0;
    let mid = 0;

    while(low <= high) {
        mid = Math.floor((high + low) / 2);
        if(arr[mid] == value) {
            return arr[mid]
        }
        else if(value > arr[mid]) {
            low = mid + 1;
        } 

        else {
            high = mid - 1;
        }
    }

    return -1
}

let sortedArray = array.sort((a,b) => {
    return a - b;
})

console.log("sortedarray", sortedArray);

let binSearch = binary_search(sortedArray, 211);

console.log(binSearch)