input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showString("Beta!! How Dare You I Am God")
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
