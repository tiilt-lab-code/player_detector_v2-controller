enum RadioMessage {
    message1 = 49434,
    increase_db = 24409,
    decrease_db = 42436,
    kill_sound = 3114,
    play_sound = 6322,
    toggle_pause = 52104
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    for (let index = 0; index <= 3; index++) {
        radio.setGroup(index)
        radio.sendMessage(RadioMessage.play_sound)
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
    for (let index = 0; index <= 3; index++) {
        radio.setGroup(index)
        radio.sendMessage(RadioMessage.toggle_pause)
    }
    basic.showString("toggle")
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
    for (let index = 0; index <= 3; index++) {
        radio.setGroup(index)
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
basic.showString("coach")
basic.clearScreen()
basic.showString("P")
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7)
let serial_numbers: number[] = []
let recent_time: number[] = []
let dB_threshold = -65
running = false
