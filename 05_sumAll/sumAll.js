const sumAll = function(num_1, num_2) {
    let new_num = 0
    if (num_1 > num_2){
        let small_num = num_2
        let large_num = num_1
    }
    else{
        let small_num = num_1
        let large_num = num_2
    }

    for (let i = small_num; i < large_num; i++ ) {
        new_num = new_num + i
        return new_num
    }

};

// Do not edit below this line
module.exports = sumAll;
