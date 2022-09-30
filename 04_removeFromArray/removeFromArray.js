const removeFromArray = function(array, values) {
    const take_away_values = []
    for (let v of values){
        let index = values.indexOf(array)
        if (index >-1) {
            array.splice(values,v);
        }
    }


};

// Do not edit below this line
module.exports = removeFromArray;
