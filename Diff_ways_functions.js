// Function Declaration:
function add(a, b){
    console.log(a+b);
}
add(100,200);

// Function Expression
const sub = function(a,b){
    console.log(a-b);
}
sub(200, 100);
//console.log(sub())

//arrow function:
const mul = (a, b) =>{
    console.log(a * b);
}
mul(10, 20);

const msg = () => "Hello World";
let res = msg();
console.log(res);

function greet(){
    console.log("Hello");
}
console.log(greet)
