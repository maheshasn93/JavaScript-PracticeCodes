var arr3 = [10,20,30,11,23];
arr3.push(50); // add the element append
console.log("using push:",arr3);

arr3.unshift(5);
console.log("using unshift:",arr3); // added the element in the begining of an array.

//pop(): remove the last element in the array. 
console.log("Remove the element is ",arr3.pop());
console.log("Remove the element is ",arr3);

//shift(): remove the first element from the array.
console.log("Remove the element by shift ",arr3.shift());
console.log("Remove the element is ",arr3);

//splice(startIndex, deleteCount, elements to be added):
arr4 =[10,20,30,40,50,60,70];
console.log("Before splice: ", arr4);
console.log(arr4.splice(2,3,41,42,43));
console.log("after splice:",arr4);

// slice(startIndext, endIndex-1): return the element in between range is given the method.

arr5=[100,200,300,400,500];
console.log("using slice method:",arr5.slice(1,4));

console.log("index  of element: ",arr5.indexOf(300));

console.log("check the element is  ",arr3.includes(600));

let arr6=["a","c","b","e"];
console.log("Sort the characters: ",arr6.sort());

console.log("Reverse the elements  ",arr6.reverse());

arr7=[10,20];
arr8=[30,40];
console.log(arr7.concat(arr8));

var arr9=["a","p","p","l","e"];

console.log(arr9.join());

//array upacking:
let users = ["Akash","Ankit","Mahesha","Ram"];
let [user1,user2] = users;
console.log(user1);
console.log(user2);