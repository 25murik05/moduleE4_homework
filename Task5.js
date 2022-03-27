class Electro{
    constructor(name, i, v) {
        this.name = name
        this.on = 'off'
        this.i = i
        this.v = v
    }
    switch() {
        if(this.on==='off'){
            console.log(`${this.name} включен!`)
            this.on = 'on'
        }
        else {
            console.log(`${this.name} выключен!`)
            this.on = 'off'
        }
    }
    power(){
        console.log(`У ${this.name} потребляемая мощность равна: ${this.i * this.v}Вт`)
    }
}


const lamp = new Electro()
lamp.name = 'table lamp'
lamp.weight = '300g'
lamp.i = 0.03
lamp.v = 220
lamp.color = function (){
    console.log(`Я свечу синим цветом!`)
}
console.log(lamp)
lamp.color()
lamp.switch()
lamp.switch()
lamp.power()


const pc = new Electro()
pc.name = 'Lumen'
pc.weight = '3000g'
pc.color = function (){
    console.log(`У меня есть RGB подсветка, я могу светиться разными цветами!`)
}
pc.i =3.5
pc.v = 220

console.log(pc)
pc.color()
pc.switch()
pc.switch()
pc.switch()
pc.power()