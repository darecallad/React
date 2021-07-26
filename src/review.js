
// const let
const person= {
    name:'John',
    walk(){},
    talk(){}
};

person.talk();
person.walk();
person.name ='';
const targetMember = 'name';
person[targetMember] = 'Jonathan';

// This

const student= {
    walk(){
        console.log(this);
    }
};

student.walk(); 
walk() //window function 

// fix problem always return reference of obj

// blind

const walk = student.walk.bind(student);
// blind walk function into obj student
walk(); 

// Arrow function

const square = function(number){
    return number * number;
}

const squareArrow = numberArrow => number * number;

const jobs = [
    {id:1 , isActive: true},
    {id:2 , isActive: true},
    {id:3 , isActive: false}
];

const activeJob = jobs.filter(job  => job.isActive);

const classes =[
    {id :1 , isUsing: true},
    {id :2 , isUsing: true},
    {id :3 , isUsing: true}
];

const usingClass = classes.filter(classes => claseese.isUsing);

//  Arrow function and This
//  Arrow function do not rebind this 

const timer = {
    talk(){
        setTimeout(() => {
            console.log("this",this);
        }, 1000);
    }
};

//  Array.map  Method

const colors =[ 'red', 'green', 'blue'];
// '<li>' + color + '</li>'
const items = colors.map( color => `<li> ${color} </li>`);

