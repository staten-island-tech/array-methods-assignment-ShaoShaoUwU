const students = [
    {
        firstName: "xdd",
        lastName: "uwu",
        graduated: false,
        DOB: 0203,
        siblings: [""],
        age: function () {
            return year - this.DOB;
        },
    },
    {
        firstName: "ls0oer",
        lastName: "clam",
        graduated: true,
        DOB: 2013,
        siblings: [""],
        age: function () {
            return year - this.DOB;
        },
    },
    {
        firstName: "rachlsoer",
        lastName: "0/10",
        graduated: false,
        DOB: 2023,
        siblings: [""],
        age: function () {
            return year - this.DOB;
        },
    },
]
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => console.log(number, index));

students.forEach((students)=> console.log(students.firstName));

const graduated = students.fiter((student)=> student.graduated);
console.log(graduated); 

const current = students.fiter((student)=> student.graduated !== true);
console.log(current); 