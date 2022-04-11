//Putting all together, using all of functional programming concepts
//Ticking clock application
const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

//These functions below is used to change the data without change the source, the data transformation, they use the arguments as immutate data
const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const civilianHours = clockTime =>
({
    ...clockTime,
    hours: (clockTime.hours > 12) ?
        clockTime.hours - 12 :
        clockTime.hours
})

const appendAMPM = clockTime =>
({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? "PM" : "AM"
})

//High-order functions
const compose = (...fns) =>
    (arg) =>
    fns.reduce(
        (composed, f) => f(composed),
        arg
    )

const display = target => time => target(time)

const formatClock = format =>
    time =>
        format.replace("hh", time.hours)
              .replace("mm", time.minutes)
              .replace("ss", time.seconds)
              .replace("tt", time.ampm)

const prependZero = key => clockTime =>
    ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ? 
            "0" + clockTime[key] :
            clockTime[key]
    })

//Composing the functions
const converToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime)

const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime)

const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            converToCivilianTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display(log)
        ),
        oneSecond()
    )

startTicking()