// Destructing - Used in APi and React

let course = {
    courseName: 'JS',
    price: 999,
    courseInstructor: 'John'
}

//course.courseInstructor
console.log(course.courseInstructor)

let {courseInstructor:  Instructor} = course

console.log(Instructor)
