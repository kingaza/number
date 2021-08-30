controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    myCounter.count += 1
    num_pred += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    myCounter.count += -10
    num_pred += -10
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (num_pred > num_true) {
        myCounter.setDigitColor(2)
        music.pewPew.play()
        info.changeLifeBy(-1)
    } else if (num_pred < num_true) {
        myCounter.setDigitColor(10)
        music.pewPew.play()
        info.changeLifeBy(-1)
    } else {
        myCounter.setDigitColor(7)
        music.baDing.play()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    myCounter.count += -1
    num_pred += -1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash(num_true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    myCounter.count += 10
    num_pred += 10
})
let myCounter: DigitCounter = null
let num_pred = 0
let num_true = 0
info.setLife(8)
let num_init = 55
num_true = randint(10, 99)
num_pred = num_init
myCounter = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
myCounter.count = num_init
myCounter.setDigitColor(5)
