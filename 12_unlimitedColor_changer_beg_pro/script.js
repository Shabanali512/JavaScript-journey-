// generate a random color 

const randomColor = function () {

    const hex = '0123456789ABCDEF' ; 
    let color = '#' ;
    for (let i = 0; i < 6 ; i++) {

        color += hex[Math.floor(Math.random() * 16)]; 
        
    }
    return color ; 
};

let inveralId ;

const startChangingColor = function () {


    function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
    }

    if (!inveralId){
     inveralId = setInterval(changeBgColor , 1000)
    }
};
const stopChnagingColor = function () {

    clearInterval(inveralId);
    inveralId = null;
};

document.querySelector('#start').addEventListener('click' , startChangingColor);

document.querySelector('#stop').addEventListener('click' , stopChnagingColor);