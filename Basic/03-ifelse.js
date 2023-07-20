let user = 'teacher';

if (user === 'student') {
    console.log('student')
}
else if (user === 'teacher') {
    console.log('teacher');
} else {
    console.log('unknown');
}

console.log('Grading');

let marks = 88;

if (marks < 33) {
    console.log('Fail');
} else if (marks === 33) {
    console.log('Barely Pass');
} else if (marks === 60) {
    console.log('Pass-It could be better');
} else if (marks === 80) {
    console.log('Excellent')
} else if (marks === 90) {
    console.log('Very Good');
} else {
    console.log('Please enter your marks');
}

console.log('Logged In Example');

let email = false;
let facebook = false;
let google = false;

if (email & facebook || google) {
    console.log('Login sucess');
}