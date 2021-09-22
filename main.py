def on_up_pressed():
    global num_guess
    num_viewer.count += 10
    num_guess += 10
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_down_pressed():
    global num_guess
    num_viewer.count += -10
    num_guess += -10
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_a_pressed():
    if num_guess > num_answer:
        num_viewer.set_digit_color(2)
        music.pew_pew.play()
        info.change_life_by(-1)
    elif num_guess < num_answer:
        num_viewer.set_digit_color(8)
        music.pew_pew.play()
        info.change_life_by(-1)
    else:
        num_viewer.set_digit_color(7)
        music.ba_ding.play()
        game.splash("再来一局？")
        if controller.A.is_pressed():
            game.reset()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_right_pressed():
    global num_guess
    num_viewer.count += 1
    num_guess += 1
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_b_pressed():
    game.splash(num_answer)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_left_pressed():
    global num_guess
    num_viewer.count += -1
    num_guess += -1
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

num_viewer: DigitCounter = None
num_guess = 0
num_answer = 0
info.set_life(8)
num_init = 55
num_answer = randint(10, 99)
num_guess = num_init
num_viewer = sevenseg.create_counter(SegmentStyle.THICK, SegmentScale.FULL, 2)
num_viewer.count = num_init
num_viewer.set_digit_color(5)