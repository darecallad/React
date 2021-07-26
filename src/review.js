
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

