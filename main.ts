basic.showLeds(`
    # # # # .
    # . # . .
    # . . # .
    # # # # .
    . . . . .
    `)
basic.showString("Car Scanner Connect")
basic.forever(function () {
    basic.showLeds(`
        # # # . .
        # . # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showString("Organ Donor Press A, then Recipient Press B")
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
    music.playMelody("- D - G - D A B ", 299)
    led.plotBarGraph(
    1,
    2
    )
})
