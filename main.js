const buyClay = () => {
    object = {}
    return object
}
const objectReturn = buyClay()

const makePottery = (object) => {
    object.shape = "bowl";
    return object 
}
const potteryResult = makePottery(object)

const bisqueFire = (object) => {
    object.readyForGlazing === true 
    return object
}
const bisqueResult = bisqueFire(object)

const glazePottery = (object) => {
    if (object.bisqueFire = true) {
        object.glazing = 'Midnight Blue'
    } else {
        console.log('Make sure you bisque fire the pottery before you glaze it.')
    }
    return object
}
const glazeResult = glazePottery(object)

const finalFiring = (object, temp) => {
    if (temp > 1200) {
        object.cracked = true
    } else {
        object.cracked = false
    }
    return object
}
const firingResult = (object)

 console.log(firingResult)