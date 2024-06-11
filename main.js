// class Person{
//     name: string
//     age: number
//     constructor(name:string, age: number){
//         this.name = name
//         this.age = age
//     }
//     getName(): string{
//         return this.name
//     }
// }
// class Student extends Person{
//     id: number 
//     courses: Course[] 
//     constructor(name: string, age: number, id:number){
//         super(name,age)
//         this.id = id
//         this.courses = []
//     }
//     regesterforCourse(course: Course): void{
//         this.courses.push(course)
//     }
// }
// class Instructor extends Person{
//     salary: number
//     courses: Course []
//     constructor(name:string, age: number, salary: number){
//         super(name, age)
//         this.salary = salary
//         this.courses = []
//     }
//     assingCourse(course: Course): void{
//         this.courses.push(course)
//     }
// }
// class Course {
//     id: number
//     name: string
//     students: Student[]
//     instructor!: Instructor
//     constructor(id: number, name: string){
//         this.id = id
//         this.name = name
//         this.students = []
//     }
//     addStudent(student: Student): void{
//         this.students.push(student)
//     }
//     setInstructor(instructor: Instructor): void {
//         this.instructor = instructor;
//     }
// }
// class Department{
//     name: string
//     courses: Course[]
//     constructor(name: string){
//         this.name = name
//         this.courses = []
//     }
//     addCourse(course: Course):void{
//         this.courses.push(course)
//     }
// }
// const student1 = new Student("kinza", 20 , 1234)
// const student2 = new Student("hina", 21 , 12345)
// const instructor1 = new Instructor("haya", 30, 40000)
// const instructor2 = new Instructor("sagar", 38 , 45000)
// const course1 = new Course(1, 'Introduction to Computer Science');
// const course2 = new Course(2, 'Advanced Programming');
// const department1 = new Department('Computer Science');
// department1.addCourse(course1)
// department1.addCourse(course2)
// student1.regesterforCourse(course1)
// student1.regesterforCourse(course2)
// course1.addStudent(student1)
// course1.addStudent(student2)
// course1.setInstructor(instructor1)
// console.log(student1.getName())//output kinza
// console.log(student1.courses)// output:[course]
// console.log(instructor1.courses)//output: [course]
// console.log(department1.courses)//output:[course, Course]
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    id;
    courses;
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
        this.courses = [];
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students;
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
    }
}
class Department {
    name;
    courses;
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student('Alice', 20, 12345);
const student2 = new Student('Bob', 21, 12346);
const instructor1 = new Instructor('Eve', 30, 40000);
const instructor2 = new Instructor('Charlie', 35, 45000);
const course1 = new Course(1, 'Introduction to Computer Science');
const course2 = new Course(2, 'Advanced Programming');
const department1 = new Department('Computer Science');
department1.addCourse(course1);
department1.addCourse(course2);
student1.registerForCourse(course1);
student2.registerForCourse(course1);
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
console.log(student1.getName()); // Output: Alice
console.log(student1.courses); // Output: [Course]
console.log(instructor1.courses); // Output: [Course]
console.log(department1.courses); // Ou
export {};
