const strCheck = (str, obj) => {
    if(str in obj) {
        return true
    } else {
        return false
    }
}

const obj = {
    city: "Nazare",
    country: "Portugal"
}

let a = strCheck("country", obj)
let b = strCheck("age", obj)

console.log(a, b)