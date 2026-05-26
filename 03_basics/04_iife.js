// immediately invoke function exxpression (iife)


// name iffe
(function chai (){

    console.log("DB connected");
})();

(  (name) => {

    console.log(`DB connected two ${name}`)
}

)("shaban")