var arr1 = [10, 2,3, 5,7,9,20, 30, 40,20, 40, 60];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);

for(i=0;i<arr1.length;i++){
    console.log(`Element at index ${i} is`,arr1[i]);
}

for(i=0;i<arr1.length;i++){
    if(arr1[i]%2==0){
        console.log(`Even Element at index ${i} is`,arr1[i]); 
    }
}

var arr3 = [10,20];
arr3.push(50); // add the element append
console.log("using push:",arr3);

arr3.unshift(5);
console.log("using unshift:",arr3); // added the element in the begining of an array.


var arr2 = [10,10.5,true,{name : "Mahesha"}, ()=>console.log("Hello"),'Kod'];

for(i=0;i<arr2.length;i++){
    console.log(`Element at index ${i} is`,arr2[i]);
}

