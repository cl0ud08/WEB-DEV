
/*Create a Student Constructor (or Object Literal)

Each student should have:
name, rollNumber, and marks (out of 100)

*/

function Student(name, rollNumber, marks) {
   this.name = name;
   this.rollNumber = rollNumber;
   this.marks = marks;
}

let students = [
   new Student("vedang", 101, 85),
   new Student("sidhharth", 131, 90),
   new Student("harshit", 121, 78)
];

console.log(students[3].name);