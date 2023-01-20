input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("G F G A - F E D ", 196)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 69; index++) {
        music.playMelody("C5 B A G F E D C ", 415)
        music.playMelody("C D E F G A B C5 ", 415)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Sup I am The Goat")
    basic.showString("your not")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Surprised)
})
// Im goat
// 
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.No)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showString("Beta!! How Dare You I Am God")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
