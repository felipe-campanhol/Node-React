//Data transformation is the concept of manipulate the content of any array, object using the previously concepts, meaning that can't change the original value, but return a new one instead
const carrer = ["Manager", "Manager", "Pilot", "Seller", "Pilot"]

const removeDuplicate = carrer.reduce(
    (single_carrer, carrer) => 
        (single_carrer.indexOf(carrer) !== -1) ?
            single_carrer :
            [...single_carrer, carrer],
            []
    )

console.log(removeDuplicate)