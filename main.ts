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
        radio.sendMessage(RadioMessage.toggle_pause)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        radio.setGroup(index)
        radio.sendMessage(RadioMessage.play_sound)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 3; index++) {
        radio.setGroup(index)
        radio.sendMessage(RadioMessage.kill_sound)
    }
})
basic.showString("coach")
basic.clearScreen()
basic.showString("P")
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7)
let serial_numbers: number[] = []
let recent_time: number[] = []
let dB_threshold = -65
let running = false
