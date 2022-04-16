//Avoiding mutate the data by using it on a function
var credentials ={
    new_token: "FAFAFA"
}
function refreshToken(credentials, token){
    credentials.new_token = token
    return credentials.new_token
}

console.log(refreshToken(credentials, "FOFOFO")) // FOFOFO
console.log(credentials.new_token)               // FOFOFO


var credentials ={
    new_token: "SASASA"
}
function refreshCopyToken(credentials, token){
    return Object.assign({},credentials.new_token,token)
}

console.log(refreshCopyToken(credentials, "SOSOSO")) // SOSOSO
console.log(credentials.new_token)                   // SASASA

var credentials ={
    new_token: "PAPAPA"
}

//Using ES6 to avoiding replace value from source object
const refreshES6Token = (credentials, token) => ({
    ...credentials,
    token
})

console.log(refreshES6Token(credentials, "POPOPO"))  // POPOPO
console.log(credentials.new_token)                   // PAPAPA

var customers = [
    {name: "ITAU"},
    {name: "COKE"},
    {name: "MAC"},
]

var addCustomer = function(customers_list, name){
    customers_list.push({name: name}) //push is mutate function, so it will change the original value
    return customers_list
}

console.log(addCustomer(customers, "NIKE").length) //4
console.log(customers.length)                      //4

var customers = [
    {name: "ITAU"},
    {name: "COKE"},
    {name: "MAC"},
]

//concat function is a immutate function, will not change the original object
const addCopyCustomer = (customers_list, name) => customers_list.concat({name})

console.log(addCopyCustomer(customers, "NIKE").length) //4
console.log(customers.length)                          //3

var customers = [
    {name: "ITAU"},
    {name: "COKE"},
    {name: "MAC"},
]

const addArrowCopyCustomer = (customer_list, name) => [...customer_list, {name}]

console.log(addArrowCopyCustomer(customers, "NIKE").length) //4
console.log(customers.length)                               //3
