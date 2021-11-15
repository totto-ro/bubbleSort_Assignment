//Time complexity of this algorithm is O(n^2):
function bubbleSort( arr ){
    let isSwapped =false;
    for( let i = 0; i < arr.length; i++ ){
        for( let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped){
            return false; //break;
        }
    }
    return arr;
}

let result = bubbleSort( [-5, 2, 33, 10, -7] );
let result2 = bubbleSort( [10,5,6,1,8,2,3,4,7,9] );
let result3 = bubbleSort( [1,2,3,4,5,6] );
console.log(result);
console.log(result2);
console.log(result3);

//Time complexity of this algorithm is O(n):
function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

//Time complexity of this algorithm is O(1):
function findNth(arr, n){
    console.log(arr[n]);
}

//Time complexity of this algorithm is O(n):
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}

//Time complexity of this algorithm is O(n^2):
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
