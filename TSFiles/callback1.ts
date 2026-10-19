//callback function is used to solve asynchronous nature
// In typescript, special  features like callback & overloading function

//callback function is a function that passed as an argument  to another function & can execute later

//callback function
function displayresult(result:number)
{
    console.log(result);

}
//function that takes callback function as an parameter
function sum(a:number,b:number,res:(result:number)=>void)
{
    let result = a+b
    res(result); //executing the callback function
}
sum(20,50,displayresult);// calling the function by passing the callback function

//overloading function is function that has multiple signature/version of the same name but diffferent
//parameter or return type
//step1: write the signature of the function
//step2: implement a function
//step3: calling function
//ex: same function name with different parameter types(data type)
function getinfo(id:number):string;
function getinfo(name:string): string;

function getinfo(param : number | string):any
{
    if ( typeof param === "number")
    {
        console.log(`user id is : ${param}`);
    }
    else
    {
        console.log(`user name is :${param}`);

    }
}
getinfo(101);
getinfo("bhagya");

//using the generic array<T> type
let empnames:Array<string> = ["jhon","smith","james","jack"];
let empid:Array<number> = [101,102,103,104];
let empdet:Array<string | number> = ["jhon",101,"smith",102,"james",103,104,"jack"];
let mixed:Array<any> = ["jhon",101,true,null];

console.log(empnames);
console.log(empid);
console.log(empdet);
console.log(mixed);

// iterating array using for loop
let empname1:Array<string> = ["jhon","smith","james","jack"];
let empid1:Array<number> = [101,102,103,104];
let empdet1:Array<string | number> = ["jhon",101,"smith",102,"james",103,104,"jack"];
let mixed1:Array<any> = ["jhon",101,true,null];

//traditional for loop
console.log("Sie of an array is : ", empname1.length);
for(let i=0;i<empname1.length;i++) // i<=empname1.length-1
{
    console.log(empname1[i]);

}

// iterating using for in loop(index based iteration)
console.log("Employee IDs...");
for(let i in empid1)
{
    console.log(empid[i]);
}

//iterating using for of loop(value based iteration)
console.log("Employee details...");
for(let value of empdet1)
{
    console.log(value);
}

// passing an array to the function.
// search an element in a array using function
function search(ele:number, arr:number[]):boolean // whenever element found return in true/false
{
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i]===ele)
        {
            return true; //element found
        }
    }
            return false;
    }
    let arr:number[] = [10,20,30,40,50,60];
    console.log( "Searching an element in an array");
    console.log(search(30,arr));
    console.log(search(80,arr));

    // array of tupples //student id ,name ,dept/branch
    let students:[number, string ,string][] = [[101,"jhon","IT"],[102,"smith","CS"],[103,"james","EC"]];
    console.log("Student details: ",students.length);
    console.log(students[0]);

    // push & POP methods
    // push() - add single/ multiple elements to the end of an array
    let nums: number[] = [10,20,30,40];
    nums.push(50,60);
    console.log("After push operation:",nums);

    // pop() - remove the last element from an array
    let lastnum = nums.pop();
    console.log("After pop operation:",nums);
    console.log("popped element:",lastnum);
    
    // Shift & unshift
    //shift() - removes the first element from an array
    let firstnum = nums.shift();
    console.log("after shift operation:",nums);
    console.log("shifted element:",firstnum);

    // unshift() - adds one or more elements to the beginning of an array
    nums.unshift(15,25,35)
    console.log("after unshift operation:",nums);

    // merge the 2 or more arrays using concat() method
    let arr1:number[] = [1,2,3,4,5,6];
    let mergearry = arr1.concat([7,8,9],[10,11,12],[13,14,15,16]);
    console.log("Merged array:",mergearry);

    // slice() - extract a section of an array
    //starting index is inclusive and ending index is exclusive
    let extractarry = arr1.slice(2,5);
console.log("extracted array:",extractarry);

//for in loop
let fruits: string[] = ["apple","kiwi","banana","grapes","mango","orange"];
console.log("printing fruits along with the index for loop");
for( let i in fruits)
{
    console.log(i,fruits[i]);
}
// for each() function - executes a fucntion once for each array element
//it takes as function as parameter
fruits.forEach(function(element, index){
console.log("for each method in array",index,element) //`${index}`,`${element}`);
})

// arrow function with for each loop
fruits.forEach((element)=>{
    console.log(element.toUpperCase());
})

// map function:map() is used when you want to take every item from an array, 
// perform some operation, and create a new array with the results.
//get square of the numbers in array
let numbers : number[] = [1,2,3,4,5]
let squarednums = numbers.map(function(ele){
    return(ele*ele);
})
console.log("squared numbers:",squarednums);
console.log("original array:",numbers);

//arrow function
let doublevalue = numbers.map((element)=>{
    return(element * 2);
})
console.log("Doubled value of array:",doublevalue);

// filter function : Use filter() when you want to select only the elements that satisfy a condition.
//get only even numbers from an array skipping the {}, return type when single condition exist

let number : number[] = [-2,-1,-3,1,2,3,4,5,6,7,8]
let evennum = number.filter((num)=>num%2==0);
console.log("Even Numbers:", evennum);

//reduce funciton : applies a funciton on every element of an array and return a single value
let reduceRes = number.reduce((total, element)=>
{
    return(total+element); // by default initialize to 0
})
console.log("Sum of elements in array:",reduceRes);

// some function : checks if any elements satisfies a condition
//check array contains positive value
let haspositive =number.some((element)=>element>0);
console.log("Does array contains +ve values",haspositive);

//every function : checks if all elements satisfy a condition
let haspos =number.every((element)=>element>0);
console.log("Does array contains +ve values",haspos);


