controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    num_viewer.count += 10
    num_guess += 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    num_viewer.count += -10
    num_guess += -10
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (num_guess > num_answer) {
        num_viewer.setDigitColor(2)
        music.pewPew.play()
        info.changeLifeBy(-1)
    } else if (num_guess < num_answer) {
        num_viewer.setDigitColor(8)
        music.pewPew.play()
        info.changeLifeBy(-1)
    } else {
        num_viewer.setDigitColor(7)
        music.baDing.play()
        game.splash("再来一局？")
        if (controller.A.isPressed()) {
            game.reset()
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    num_viewer.count += 1
    num_guess += 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash(num_answer)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    num_viewer.count += -1
    num_guess += -1
})
let num_viewer: DigitCounter = null
let num_guess = 0
let num_answer = 0
info.setLife(8)
let num_init = 55
num_answer = randint(10, 99)
num_guess = num_init
num_viewer = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
num_viewer.count = num_init
num_viewer.setDigitColor(5)
