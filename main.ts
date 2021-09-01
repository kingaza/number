controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    num_viewer.count += 10
    num_pred += 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    num_viewer.count += -10
    num_pred += -10
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (num_pred > num_true) {
        num_viewer.setDigitColor(2)
        music.pewPew.play()
        info.changeLifeBy(-1)
    } else if (num_pred < num_true) {
        num_viewer.setDigitColor(10)
        music.pewPew.play()
        info.changeLifeBy(-1)
    } else {
        num_viewer.setDigitColor(7)
        music.baDing.play()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    num_viewer.count += 1
    num_pred += 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash(num_true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    num_viewer.count += -1
    num_pred += -1
})
let num_viewer: DigitCounter = null
let num_pred = 0
let num_true = 0
info.setLife(8)
let num_init = 55
num_true = randint(10, 99)
num_pred = num_init
num_viewer = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
num_viewer.count = num_init
num_viewer.setDigitColor(5)
