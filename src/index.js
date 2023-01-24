const dozens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const numbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

module.exports = function toReadable(number) {
    if(number === 0) return "zero";

    let num = ("00000" + number).slice(-5).match(/^(\d{2})(\d{1})(\d{2})$/);
    let outputText = "";

    outputText += num[1] != 0 ? (numbers[Number(num[1])] || `${dozens[num[1][0]]} ${numbers[num[1][1]]}`) + ' thousand ' : '';
    outputText += num[2] != 0 ? (numbers[Number(num[2])] || `${dozens[num[2][0]]} ${numbers[num[2][1]]}`) + ' hundred ' : '';
    outputText += num[3] != 0 ? (numbers[Number(num[3])] || `${dozens[num[3][0]]} ${numbers[num[3][1]]}`) + '' : '';

    return outputText.trimEnd();
}