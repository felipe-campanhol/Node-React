//variable manipulation
var trunder = false
trunder = true
console.log(trunder)

const rain = true
//rain = false //This will trow an error, cause const cannot be reassigned

//Usage of Let variable
console.log("\n\nUsage of Let variable\n")
var weather = "sunny"

if(weather) {
    var weather = "snowing"
    console.log('block', weather)
}

console.log('global', weather)

if(weather) {
    let weather = "windy"
    console.log('block', weather)
}

console.log('global', weather)

var vehicle = "car"
var condition = "new"

//Template string in ES6
console.log("\n\nTemplate string in ES6\n")
console.log(weather + ", " + vehicle + " " + condition)

console.log(`${weather}, ${vehicle} ${condition}`)

var phrase_whitespace = `

    The condition of the ${vehicle} can be dangerous depending on the ${weather}
    
    In this year, the condition is ${condition}

`

console.log(phrase_whitespace)

//Default value for methods
console.log("\n\nDefault value for methods\n")
function logService(user="Julius", service="Creation"){
    console.log(`The user ${user} is making a ${service}`)
}

var json_log = {
    name: {
        name: "Rener",
        nickname: "Re"
    },
    service: "Modify"
}

function logJsonService(logging=json_log){
    console.log(`The user ${json_log.name.name} is making a ${json_log.service}`)
}

logService()

logJsonService()

//Arrow funcions
console.log("\n\nArrow funcions\n")
var getAccess = access => `The customer access is ${access}`

console.log(getAccess("user"))
console.log(getAccess("admin"))

var getPermission = (isUser, typeAccess) => `The user ${isUser?"has access":"doesn't have access"} to the tool and has ${typeAccess} permission`

console.log(getPermission(true,"admin"))
console.log(getPermission(false,"none"))

//Object and Arrays
console.log("\n\nObject and Arrays\n")
var country = {
    africa: ["South Africa", "Egypt"],
    america: ["USA", "Brazil"],
    asia: ["Nepal", "Oman"],
    europe: ["Germany", "Italy"],
}

var {asia, europe} = country

console.log(asia, europe)

asia = "Turkey"
europe = "United Kingdom"

console.log(country.asia, country.europe) //Still showing older values

var ship_country = oneCountry => {
    console.log(`The selected country is ${oneCountry.africa}`)
}

var oneCountry = {
    asia: "Oman",
    africa: "Egypt"
}

ship_country(oneCountry)

//Directly notation(don't need to use dot)
var ship_country_single = ({asia}) => {
    console.log(`The directly selected country is ${asia}`)
}

ship_country_single(oneCountry)

var [firstSport] = ["Basketball", "Beisebol", "Soccer"]

var [,,thirdSport] = ["Basketball", "Beisebol", "Soccer"]

console.log(firstSport) //Basketball

console.log(thirdSport) //Soccer

var planet = "Mars"
var size = 3312

var planetary = {planet,size}

console.log(planetary)

var viewPlanets = function() {
    console.log(`The planet is ${this.planet} with the size of ${this.size}`)
}

var list_planet = {planet,size,viewPlanets}

list_planet.viewPlanets()

/*const travel_city ={
    from: "Manhattan",
    to: "NY",
    differentLocation: function() {
        var function_inside = function(){
            console.log(`They will travel from ${this.from} to the city of ${this.to}`)
        }
        function_inside() //this.from and this.to will be undefined, because of function inside
    }
}

travel_city.differentLocation()*/

const travel ={
    from: "home",
    to: "Rome",
    howToTravel() {
        var function_inside = () => {
            console.log(`You will travel from ${this.from} to the place of ${this.to}`)
        }
        function_inside() //this.from and this.to will show their correct values, because of arrow function
    }
}

travel.from = "lake"
travel.howToTravel()

//Spread operator (...)
var sounds = ["car", "music", "horn"]
var sounds_air = ["airplane", "bird", "trunder"]

var all_sounds = [...sounds, ...sounds_air]

console.log(all_sounds.join(', '))

var [last_sound] = all_sounds.reverse() //In this part the array will be muted, it means it's reversed

console.log(last_sound)
console.log(all_sounds.join(', '))

var all_sounds = [...sounds, ...sounds_air]

var [last_sound] = [...all_sounds].reverse() //In this part the array won't be muted, it means it isn't reversed

console.log(last_sound)
console.log(all_sounds.join(', '))

var [first_sound, ...rest_sounds] = all_sounds //It will separeted into two vars

console.log(rest_sounds.join(', ')) //Shows all except the first value

var obj_sound = {
    animal: "cow",
    vehicle: "submarine"
}

var single_sound = "horn"

var mixingSounds = {...obj_sound, single_sound}

console.log(mixingSounds) //Will get the object with spread operator(...) and join into the other variable
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//Promises
const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () =>
        (request.status === 200) ? 
        //resolves(JSON.parse(request.responseText).results) :
        resolves(JSON.parse(request.responseText).results) :
        reject(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
})

getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
        new Error("cannot load members from randomuser.me")
    )
)

//Class declaration
class NameValidation {

    constructor(name, max_length){
        this.name = name
        this.max_length = max_length
    }

    showValidation(){
        console.log(`The chosen name is ${this.name} and the maximum length allowed is ${this.max_length}`)
    }

}

const validate_me = new NameValidation("Heberland", 44)

validate_me.showValidation()

class PersonalValidation extends NameValidation{

    constructor(name, max_length, cell_number, address){
        super(name, max_length)
        this.cell_number = cell_number
        this.address = address
    }

    showPersonal(){
        super.showValidation()
        console.log(`The personal information of the above person is cellphone number ${this.cell_number} and address of ${this.address}`)
    }

}

const person = new PersonalValidation("Robert", 99, "11544248748", "Alabama, US")
person.showPersonal()

const {reserve_single_book, reserve} = require('./books-commonjs.js')
reserve_single_book("Abraham Lincoln")