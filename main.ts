bluetooth.startUartService()

bluetooth.onUartDataReceived(
    serial.delimiters(Delimiters.NewLine),
    function () {
        let comando = bluetooth.uartReadUntil(
            serial.delimiters(Delimiters.NewLine)
        )

        if (comando == "LIGAR") {
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else if (comando == "DESLIGAR") {
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
)