let pw = 0
let unlocktimer = 0
input.onButtonPressed(Button.A, function () {
    if (pw == 0) {
        pw += 1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (pw == 2) {
        pw += 1
        unlocktimer = 5
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(pw)
})
input.onButtonPressed(Button.B, function () {
    if (pw == 1) {
        pw += 1
    }
})
basic.forever(function () {
    if (150 > input.lightLevel() && pw != 3) {
        music.playMelody("C C C C C C C C ", 2000)
    }
})
basic.forever(function () {
    if (150 > input.lightLevel() && pw != 3) {
        basic.showLeds(`
            . . # . .
            . . . # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (pw == 3) {
        if (unlocktimer != -1) {
            basic.showNumber(unlocktimer)
            basic.pause(100)
            unlocktimer += -1
        }
        if (unlocktimer == 0) {
            basic.clearScreen()
            pw = 0
        }
    }
})
