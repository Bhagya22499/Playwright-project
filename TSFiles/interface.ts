//interface creation
interface student{
    name:string,
    rollno:number,
    study:string
}
const s:student={
    name:"bhagya",
    rollno:101,
    study:"MTech"
}
console.log(s);

//interface value in array format
interface student1{
    name:string,
    rollno:number,
    study:string,
    branch:string,
    computerscience?:string
}
const s1:student1[]=[
    {name:"bhagya",rollno:101,study:"MTech",branch:"CSE",computerscience:"AI"},
    {name:"jhon",rollno:102,study:"BTech",branch:"ECE"},
    {name:"smith",rollno:103,study:"MCA",branch:"IT"}
]
const z=s1.map(t=>t.name)
console.log(z);

//find the student name using rollno
const r=102;
const search = s1.find(t=>t.rollno===r)?.study
console.log(search);

//find the student details based on sub AI
const sub="AI"
const sub1=s1.find(t=>t.computerscience===sub)
console.log(sub1);