enum RadioMessage {
    message1 = 49434,
    increase_db = 24409,
    decrease_db = 42436,
    kill_sound = 3114,
    play_sound = 6322
}
radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        radio.setGroup(index)
        radio.sendMessage(RadioMessage.play_sound)
    }
})
radio.onReceivedMessage(RadioMessage.kill_sound, function () {
    music.setBuiltInSpeakerEnabled(false)
    running = false
    basic.showString("Stop")
})
radio.onReceivedMessage(RadioMessage.increase_db, function () {
    dB_threshold += 5
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 3; index++) {
        radio.setGroup(index)
        radio.sendMessage(RadioMessage.kill_sound)
    }
})
radio.onReceivedMessage(RadioMessage.play_sound, function () {
    music.setBuiltInSpeakerEnabled(true)
    running = true
    basic.showString("Go")
})
radio.onReceivedMessage(RadioMessage.decrease_db, function () {
    dB_threshold += -5
})
let running = false
basic.showString("Start-Stop")
basic.clearScreen()
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7)
let serial_numbers: number[] = []
let recent_time: number[] = []
let dB_threshold = -65
running = false
basic.forever(function () {
	
})
