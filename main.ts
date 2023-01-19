input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("sup im the goat")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Surprised)
})
basic.forever(function () {
	
})
