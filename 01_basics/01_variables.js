const accountId = 144553
let accountEmail = "deepali@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"            //not recommended
let accountState;

// accountId = 2  //not allowed

accountEmail = "dd@hc.com"
accountPassword = "231234"
accountCity="Indore"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and function scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])

console.log("Prachi")