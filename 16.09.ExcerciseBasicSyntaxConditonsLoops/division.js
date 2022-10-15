function division(number) {
    let division = 0;
    if(number % 10 === 0) {
        number = 10;
    } else if (number % 7 === 0){
        number = 7;
    } else if (number %6 === 0){
        number  = 6;
    } else if (number % 3 ===0) {
        number = 3;
    } else if (number % 2 ===0) {
        number = 2;
    } else {
        number = "Not divisible";
    }
    if(number === 'Not divisible'){
        console.log(number);
    } else {
        console.log(`The number is divisible by ${number}`);
    }
    
}
division(11)