// objects with constructor 

// const tinderUser = new Object()   this is called singleton method 

const TinderUser = {}

TinderUser.id = "123"
TinderUser.name = "Shaban"
TinderUser.IsLoggedIn = false 

// console.log(TinderUser);  


const regularUser = {

    email : "Some@gmail.com", 
    fullname : {

        UserfullName : {

            firstname : "Shaban",
            Lastname : "Ali"
        }
    }

} 

// console.log(regularUser); 
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.UserfullName);
// console.log(regularUser.fullname.UserfullName.firstname);



const obj1 = { 1: "a" , 2: "b"}
const obj2 = { 3: "a" , 4: "b"}

// console.log(obj1 , obj2);

// const obj3 = Object.assign(obj1 , obj2)

// console.log(obj3); 
// console.log(obj3 == obj1); 

const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

// console.log(TinderUser);
// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));  

// console.log(TinderUser.hasOwnProperty("name"));   



// *********************Object de-structure***************************

const course = {

    coursename : "JS in Urdu",
    price : "999", 
    CourseInstructor : "Shaban"
}

// console.log(course.CourseInstructor)

// const {CourseInstructor} = course 
// console.log(CourseInstructor);

const {CourseInstructor: Instructor} = course 
console.log(Instructor);
