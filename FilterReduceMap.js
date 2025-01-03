var arr1 = [10,11,12,13,14,15,16,17]
var newArr = arr1.filter(function(ele) {
    if(ele % 2 === 0){
        return ele;
    }
})

console.log('Original array', arr1);
console.log('Even array: ',newArr);

var arr2 = [1996, 2000, 1997,1994];

var leapYearArr = arr2.filter(function(ele) {
    if((ele % 4 === 0 && ele % 100 !== 0) || (ele % 400 === 0)) {
        return ele;
    }
})

console.log('leap years: ',leapYearArr);

var arr3 = [1,2,3,4,5,6,7,8]

var sqr_arr = arr3.map((ele) => ele*ele);
console.log("sqr of numbers: ",sqr_arr);


var arr4 = [1,2,3,4,5,6];
var sum = arr4.reduce((ace, ele) => ace +ele, 0);
var product = arr4.reduce((ace,ele) => ace * ele, 1);


console.log('Sum of array: ',sum);
console.log('Product of numbers',product);

var foreach = arr4.forEach((ele,inx, arr4) => console.log(ele,inx,arr4));