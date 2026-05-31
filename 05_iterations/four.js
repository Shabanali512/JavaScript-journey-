const myObject = {

    js : 'Javascript',
    cpp : 'C++' , 
    py : 'Python ' , 
    rb : 'Ruby'
} 

for(const key in myObject){

    // console.log(myObject[key])
} 

const programing = ["js" , "py" , "cpp" , "java"]

for(const key in programing){

    // console.log(programing[key]);
    
}


// const map = new Map() 
// map.set('PK' , "Pakistan")
// map.set('USA', "United States of America" )
// map.set('Uk' , " United kingdom")

// for(const key in map){
//     console.log(map)

// } 

// map is not iterateable in For in loop  

const coding = ["js", "py" , "cpp" , "rb"] 

coding.forEach(function (items){

        console.log(items)

}) 

coding.forEach((item) => {

    console.log(item);
    

}) 

coding.forEach( (item , index , arr) => {

    console.log(item , index , arr)


})



const MyObject = [

        {
            languageName : "javascript",
            languagefileName : "js"
        }, 
             {
            languageName1 : "javascript",
            languagefileName1 : "js"
        }
] 

MyObject.forEach((item) => {

    console.log(item.languagefileName);
    

})