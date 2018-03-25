// init array
let array = [2,3,5,7,2,8,9,211,20,10,55,8,7,2];

// create method that will take in an array and the value being searched
const binary_search = (arr, value) => {
    // create our flags with high being the last value in the array after we sort
    let high = arr.length -1;
    // low being the 0 element
    let low = 0;
    // mid being the middle element after we add high + low and / 2
    let mid = 0;

    while(low <= high) {
        mid = Math.floor((high + low) / 2);
        // if the value is found at the middle of the array great we find the value return it
        if(arr[mid] == value) {
            return arr[mid]
        }

        // if the value is greater than the value in the middle array then add one 1 to low
        // REMEMBER THAT WE ARE ADDING MID + 1 so basically throw array the left side of the array
        else if(value > arr[mid]) {
            low = mid + 1;
        } 

        // if the value is loweer than the middle shrink the value of high so that its the left half of the array 
        else {
            high = mid - 1;
        }
    }

    return -1
}

// sort the array with built in sort method

let sortedArray = array.sort((a,b) => {
    return a - b;
})

console.log("sortedarray", sortedArray);

let binSearch = binary_search(sortedArray, 211);

console.log(binSearch)