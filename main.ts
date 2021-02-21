radio.onReceivedNumber(function (receivedNumber) {
    if (_try == 0) {
        basic.showNumber(receivedNumber)
        if (receivedNumber >= 60 && receivedNumber <= 100) {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        } else if (receivedNumber < 60) {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        } else if (receivedNumber > 100) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            music.playTone(988, music.beat(BeatFraction.Breve))
        }
    } else if (_try == 1) {
        basic.clearScreen()
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        music.stopMelody(MelodyStopOptions.All)
    }
})
input.onButtonPressed(Button.A, function () {
    if (_try == 0) {
        _try = 1
    } else if (_try == 1) {
        _try = 0
    }
})
let _try = 0
let strip: neopixel.Strip = null
radio.setGroup(20)
strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
_try = 0
