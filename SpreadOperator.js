function add() {
    console.log('Inside add function');
}

//console.log(add);
add();
add('Hello');
add(10,20,30,40);

function add(...args) {
     if(args.length === 2){
        console.log(`Muliplication of ${args[0]} and ${args[1]}`,args[0] * args[1]);
    }else if(args.length=== 3){
        console.log(args[0]*args[1]*args[2]);
    } else {
        console.log("Multiplication is not Performed.");
    }
    
}
add();
add(10,20);
add(10,20,30);
add(10,20,30,40);

function mul() {
    let res =1;
    for(let i=0;i<arguments.length;i++){
        res = res * arguments[i];
    }
    console.log("Multiplication Result is:",res);
}
mul(10,20);
