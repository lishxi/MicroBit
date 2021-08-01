input.onButtonPressed(Button.A, function () {
    mbit_小车类.Servo_Car(mbit_小车类.enServo.S2, 71)
})
input.onButtonPressed(Button.B, function () {
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Green)
    mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Run, 175)
})
