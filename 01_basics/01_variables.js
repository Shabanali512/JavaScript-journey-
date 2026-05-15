const accountId = 51214
let accountEmail = "shaban@gmail.com"
var accountPassword = "121472"
accountCity = "Lahore"
let accountState ;

// Tarika 1: console.log() - Single value ya string print karta hai
// Agar variable ka value chahiye to quotes mat lagao
// console.log("accountId")  -- yeh GALAT hai, sirf text "accountId" print karega
console.log(accountId);  // sahi tarika - actual value print karega: 51214

// Tarika 2: console.table() - Multiple values ko table format mein dikhata hai
// Array mein saari values daal do, ek saath structured format mein dekhne ko milti hain
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])