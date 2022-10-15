function rounding(number, precision) {
    if(precision >=15){
        precision = 15;
    }
    let result = number.toFixed(precision)
    console.log(parseFloat(result));
}
rounding(3.14867545342457696675554644533534334, 16);