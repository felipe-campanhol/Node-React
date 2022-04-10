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

const userLogs = userName => message =>
    console.log(`${userName} -> ${message}`)

const log_user = userLogs("Campa44")

log_user("Attempted to load 10 fake members")
getFakeMembers(10).then(
    members => log_user(`Successfully loaded ${members.length} members`),
    error => log_user(`encountered an error loading members`)
)
//Output:
//Campa44 -> Attempted to load 10 fake members
//Campa44 -> Successfully loaded 10 members

//Recursion
const countdown = (value, fn) =>{
    fn(value)
    return (value > 0) ? countdown(value-1, fn) : value
}

countdown(10, value => console.log(value))

//Recursion with delay promises
const countdown_delay = (value, fn, delay=1000) =>{
    fn(value)
    return (value > 0) ? 
    setTimeout(() => countdown(value-1, fn, delay), delay) :
    value
}

const log_countdown = value => console.log(value)
countdown_delay(10, log_countdown)

//Accessing the inner objects
const car_specifications = {
    name: "Pontiac",
    type: {
        bodywork: "Coupe",
        engine: "2.0 liters",
        optional: {
            wheel: "17 in",
            color: {
                choice_1: "White",
                choice_2: "Red",
                choice_3: "Black"
            }
        }
    }
}

const deepPick = (fields, object={}) => {
    const [first, ...rest] = fields.split(".")
    return (rest.length) ?
        deepPick(rest.join("."),object[first]) :
        object[first]
}

console.log(deepPick("type.optional.color", car_specifications))

//Composition is used to attach two or more functions into one
//Not the best way to join functions

const createClockTime = date => ({date})

const appendAMPM = ({date}) =>
    ({
        date,
        ampm: (date.getHours() >= 12) ? "PM" : "AM"
    })

    const civilianHours = clockTime => {
        const hours = clockTime.date.getHours()
        return {
            ...clockTime,
            hours: (hours > 12) ?
            hours - 12 :
            hours
        }
    }

    const removeDate = clockTime => {
        let newTime = {...clockTime}
        delete newTime.date
        return newTime
    }

    const joinFunction = date =>
        removeDate(
            civilianHours(
                appendAMPM(
                    createClockTime(date)
                )
            )
        )

    console.log(joinFunction(new Date()))

//Better way to create join function
const compose = (...fns) =>
    (arg) =>
    fns.reduce(
        (composed, f) => f(composed),
        arg
    )

const betterJoinFunction = compose(
    createClockTime,
    appendAMPM,
    civilianHours,
    removeDate
)

console.log(betterJoinFunction(new Date()))

//