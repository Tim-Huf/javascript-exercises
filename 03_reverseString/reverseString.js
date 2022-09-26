const reverseString = function(input_string) {
    let reverse_string = "";
    for (let i = input_string.length - 1; i >= 0; i--) {
        reverseString += input_string[i]
    }

};

// Do not edit below this line
module.exports = reverseString;
