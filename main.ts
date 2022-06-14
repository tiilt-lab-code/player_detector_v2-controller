enum RadioMessage {
    kill_sound = 3114,
    play_sound = 6322,
    increase_db = 24409,
    decrease_db = 42436,
    message1 = 49434,
    toggle_pause = 52104
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    for (let index = 0; index <= 3; index++) {
        radio.setGroup(index)
        radio.sendMessage(RadioMessage.play_sound)
        radio.sendString("head_tilt_reset")
    }
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.increase_db)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    for (let index2 = 0; index2 <= 3; index2++) {
        radio.setGroup(index2)
        radio.sendMessage(RadioMessage.toggle_pause)
    }
    running = !(running)
    if (running) {
        basic.showString("R")
    } else {
        basic.showString("P")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.decrease_db)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    for (let index3 = 0; index3 <= 3; index3++) {
        radio.setGroup(index3)
        radio.sendMessage(RadioMessage.kill_sound)
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
let running = false
let recent_time: number[] = []
let serial_numbers: number[] = []
basic.showString("P")
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7)
let dB_threshold = -65
running = false
