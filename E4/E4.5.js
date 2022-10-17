class Device {
    constructor(name, turn) {
        this.name = name,
        this.turn = turn
    }
    calculatePower = function (kilowatts, hours) {
        let kwh = kilowatts * hours / 1000
        console.log(`${this.name} is using ${kwh}kWh/day`)
    }

    turnOn = function () {
        this.turn = "turned on"
        console.log(`${this.name} is ${this.turn}`)
    }

    turnOff = function () {
        this.turn = "turned off"
        console.log(`${this.name} is ${this.turn}`)
    }
}

class WaterHeater extends Device {
    constructor(name, brand) {
        super();
        this.name = name
        this.brand = brand
    }

    boilsWater = function(temp) {
        console.log(`The temperature of the water is ${temp} degrees`)
    }

    brandName = function () {
        console.log(`You are using the ${this.brand} brand`)

    }
}


class MicroWave extends Device {
    constructor(color, name) {
        super();
        this.name = name,
        this.color = color
    }
    prepFood = function(minutes) {
        console.log(`Your food got ready in ${minutes} minutes `)
    }
}



const heater = new WaterHeater("Water Heater", "Phillips")
const micro = new MicroWave("blue", "Microwave")


heater.turnOn()
micro.turnOff()
heater.calculatePower(35, 1)
micro.prepFood(3)
console.log(micro.color)
heater.boilsWater(70)
micro.calculatePower(100, 24)
heater.turnOff()
heater.brandName()


