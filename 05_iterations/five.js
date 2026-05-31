// const myNUms = [1,2,3,4,5,6,7,8,9]

// const newNums = myNUms.filter((nums) => {

//     return nums > 5

// }) 

// console.log(newNums); 

const books =[

    {
        title : "Book one" , 
        genre : " Fiction" ,
        publish : "1981" ,
        edition : "2004"
    },
      {
        title : "Book two" , 
        genre : " History" ,
        publish : "1982" ,
        edition : "2005"
    },
        {
        title : "Book three" , 
        genre : " Fiction" ,
        publish : "1986" ,
        edition : "2006"
    },
        {
        title : "Book four" , 
        genre : " comdey" ,
        publish : "1988" ,
        edition : "2008"
    },
        {
        title : "Book one" , 
        genre : " Action" ,
        publish : "1989" ,
        edition : "2000"
    }

] 

const Special_book = books.filter((bk) =>{

    return bk.genre === " Action"
}) 

console.log(Special_book);