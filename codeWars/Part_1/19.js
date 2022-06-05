//ATM machines allow 4 or 6 digit PIN codes and PIN codes
// cannot contain anything but exactly 4 digits or exactly 6 digits.
//
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
    if ((typeof +pin === 'number') && (!isNaN(+pin)) && (pin.indexOf('.') === -1) && (pin.indexOf('-') === -1) && (pin.indexOf(' ') === -1) && (pin.indexOf('\n') === -1) && (pin.indexOf('+') === -1)) {
        if (pin.length === 4 || pin.length === 6) {
            return true
        }else return false
    } else return false
}

console.log(validatePIN('.234'))