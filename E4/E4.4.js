function Device(name, turn) {
    this.name = name,
        this.turn = turn,

        this.turnOn = function(){
            this.turn = "turned on"
            console.log(`${this.name} is ${this.turn}`)
        },
        this.turnOff = function (){
            this.turn = "turned off"
            console.log(`${this.name} is ${this.turn}`)
        }
}

Device.prototype.calculatePower = function(kilowatts, hours) {
    let kwh = kilowatts * hours / 1000
    console.log(`${this.name} is using ${kwh}kWh/day`)
}

function WaterHeater(name, brand) {
    this.name = name
        this.brand = brand
        this.heatsWater = function(temp) {
            console.log(`The temperature of the water is ${temp} degrees`)
        }
}

WaterHeater.prototype = new Device()

function MicroWave(color, name){
    this.name = name,
        this.color = color,
        this.prepFood = function(minutes) {
            console.log(`Your food got ready in ${minutes} minutes `)
        }

}

MicroWave.prototype = new Device()

const heater = new WaterHeater("Water Heater", "Phillips")
const micro = new MicroWave("blue", "Microwave")


heater.turnOn()
micro.turnOff()
heater.calculatePower(35, 1)
micro.prepFood(3)
console.log(micro.color)
heater.heatsWater(70)
micro.calculatePower(100, 24)
heater.turnOff()