//conversion of number to String
function add1(x:string,y:number){
    console.log(x.toString()+y.toString());
    }
    add1("abc",893);

//spread operator
function addnumbers(...nums:number[])
{
    let i, sum:number=0;
    for(i=0; i<nums.length; i++)
    {
        sum = sum+nums[i];
    }
    console.log("sum of numbers:", sum);
}

addnumbers(1,2,3);
addnumbers(1,2,3,4,5,6);

// rest parameter different data type // spread operator
function listelements(...elements:(string | number)[]):number{
    return elements.length;
}
console.log("length of the elements in array");
console.log(listelements("jhon","smith","james"));
console.log(listelements(10,20,30,40,50));
console.log(listelements("jhon",10,"smith",20,"james",30,40,50))

// fucntion with optional parameter
function displaydetails(id:number,name:string,mailid?:string)
{
console.log("ID is :",id);
console.log("name is ",name);
if(mailid!==undefined){
console.log("email id is",mailid);
}
}
displaydetails(101,"jhon","jhon@gmail.com");
displaydetails(102,"smith");

//function with default parameter
function calculatediscount(price:number,rate:number=0.5)
{
    let discount:number = price * rate;
    console.log("discount amount is :",discount);
}
calculatediscount(1000,0.3)
calculatediscount(2000)

//anonymous function using arrow function
let greet = ()=>{
    console.log("welcome to typescript");
}
greet();

// arrow function with parameter & return type 
let addnum = (a:number,b:number):number=>{
    return(a+b);
}
console.log(`sum of the numbers: ${addnum(10,20)}`);

// arrow  function with implicit return
let add = (a:number,b:number):number => a+b;
let subtract = (a:number,b:number):number=>a-b;
let multiply = (a:number,b:number):number=>a*b;
let devide = (a:number,b:number):number=>a/b;
console.log("addition of 2 numbers:",add(30,80));
console.log("subtraction of numbers:",subtract(130,80));
console.log("multiplication of numbers:",multiply(2,4));
console.log("division of numbers",devide(100,10));