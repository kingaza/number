def on_up_pressed():
    global num_pred
    myCounter.count += 1
    num_pred += 1
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_down_pressed():
    global num_pred
    myCounter.count += -10
    num_pred += -10
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_a_pressed():
    if num_pred > num_true:
        myCounter.set_digit_color(2)
        music.pew_pew.play()
        info.change_life_by(-1)
    elif num_pred < num_true:
        myCounter.set_digit_color(10)
        music.pew_pew.play()
        info.change_life_by(-1)
    else:
        myCounter.set_digit_color(7)
        music.ba_ding.play()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_right_pressed():
    global num_pred
    myCounter.count += -1
    num_pred += -1
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_b_pressed():
    game.splash(num_true)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_left_pressed():
    global num_pred
    myCounter.count += 10
    num_pred += 10
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

myCounter: DigitCounter = None
num_pred = 0
num_true = 0
info.set_life(8)
num_init = 55
num_true = randint(10, 99)
num_pred = num_init
myCounter = sevenseg.create_counter(SegmentStyle.THICK, SegmentScale.FULL, 2)
myCounter.count = num_init
myCounter.set_digit_color(5)