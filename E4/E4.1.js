const student = {
    city: "Tallinn",
    language: "est"
}

const person = Object.create(student)
person.ownLanguage = "eng"
person.age = 29

function showOwnProp(obj) {
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key, obj[key])
        }
    }
}

showOwnProp(person)