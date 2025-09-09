import Person from "./pesron";
import Student from "./student";
import Teacher from "./teacher";

// TODO - test classes
var testPerson = new Person({name:'Joe Test'});
var testStudent = new Student({
    name:'Jane Clever',
    marks:[]
});
var testTeacher = new Teacher({
    name:'Mr. Smart',
    students:[testStudent]
});

export { Person, Student, Teacher };