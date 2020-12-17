let Direct = 0
let Speed = 0
radio.setGroup(88)
basic.forever(function () {
    Speed = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    -8,
    9
    )
    if (Speed >= 8) {
        radio.sendString("前8")
    } else if (Speed == 7) {
        radio.sendString("前7")
    } else if (Speed == 6) {
        radio.sendString("前6")
    } else if (Speed == 5) {
        radio.sendString("前5")
    } else if (Speed == 4) {
        radio.sendString("前4")
    } else if (Speed == 3) {
        radio.sendString("前3")
    } else if (Speed == 2) {
        radio.sendString("前2")
    } else if (Speed == 1) {
        radio.sendString("前1")
    } else if (Speed == 0) {
        radio.sendString("とまる")
    } else if (Speed == -1) {
        radio.sendString("後1")
    } else if (Speed == -2) {
        radio.sendString("後2")
    } else if (Speed == -3) {
        radio.sendString("後3")
    } else if (Speed == -4) {
        radio.sendString("後4")
    } else if (Speed == -5) {
        radio.sendString("後5")
    } else if (Speed == -6) {
        radio.sendString("後6")
    } else if (Speed == -7) {
        radio.sendString("後7")
    } else {
        radio.sendString("後8")
    }
})
basic.forever(function () {
    Direct = pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    -4,
    5
    )
    if (Direct >= 4) {
        radio.sendString("右4")
    } else if (Direct >= 3) {
        radio.sendString("右3")
    } else if (Direct == 2) {
        radio.sendString("右2")
    } else if (Direct == 1) {
        radio.sendString("右1")
    } else if (Direct == 0) {
        radio.sendString("かいてんおわり")
    } else if (Direct == -1) {
        radio.sendString("左1")
    } else if (Direct == -2) {
        radio.sendString("左2")
    } else if (Direct == -3) {
        radio.sendString("左3")
    } else {
        radio.sendString("左4")
    }
})
