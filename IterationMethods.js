let numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach(function(element, index){
    console.log("The index of",index,"element: ", element);
});

let even1 = [];
for(let i=0;i<numbers.length;i++){
    if(numbers[i] % 2 === 0){
       even.push(numbers[i]); 
    }
}
console.log(even);

let odd = numbers.filter((num)=> num % 2 !==0);
console.log(odd);

let even = numbers.filter((num)=> num % 2 == 0);
console.log(even);