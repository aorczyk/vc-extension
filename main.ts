let latestCommands: { [key: string]: number } = {}

let servoLimit = 30;

basic.clearScreen()

bluetooth.startUartService()

bluetooth.onBluetoothConnected(function () {
})

bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let command = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    let commadParts = command.split("=")

    latestCommands[commadParts[0]] = parseFloat(commadParts[1])
})

basic.forever(function () {
    while (Object.keys(latestCommands).length) {
        let commandName = Object.keys(latestCommands)[0]
        let commandValue = latestCommands[commandName]
        delete latestCommands[commandName];

        if (commandName == "-v") {

        } else if (commandName == "oy" || commandName == "sl" || commandName == "jry") {

        } else if (commandName == "ox" || commandName == "sr" || commandName == "jrx") {

        }
    }
})


/**
 * Do something when a specific state of buttons on the PF remote control is achieved.
 * @param channel the channel switch 0-3
 * @param red the red output button
 * @param blue the blue output button
 * @param action the trigger action
 * @param handler body code to run when the event is raised
 */
//% blockId=pfReceiver_infrared_on_rc_command
//% block="on RC command : channel %channel | red %red | blue %blue | action %action"
//% weight=95
export function onRCcommand(
    handler: () => void
) {
    handler();
}