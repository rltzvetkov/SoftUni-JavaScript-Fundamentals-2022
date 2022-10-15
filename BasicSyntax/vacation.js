function vacation(number, group, day) {
    let ticketPrice = 0;
    let total = 0;
    if (day === 'Friday'){
        if (group === 'Students'){
            ticketPrice = 8.45;
        } else if (group === 'Business') {
            ticketPrice = 10.90;
        } else if (group === 'Regular') {
            ticketPrice = 15;
        }
    }
    if (day === 'Saturday'){
        if (group === 'Students'){
            ticketPrice = 9.80;
        } else if (group === 'Business') {
            ticketPrice = 15.60;
        } else if (group === 'Regular') {
            ticketPrice = 20;
        }
    }
    if (day === 'Sunday'){
        if (group === 'Students'){
            ticketPrice = 10.46;
        } else if (group === 'Business') {
            ticketPrice = 16;
        } else if (group === 'Regular') {
            ticketPrice = 22.50;
        }
    }
    total = ticketPrice * number;
    if (group === 'Students' && number >= 30) total -=  total * 0.15;
    if (group === 'Business' && number >= 100) total -= ticketPrice * 10;
    if (group === 'Regular' && number>= 10 && number <= 20) total -= total * 0.05;
    console.log(`Total price: ${total.toFixed(2)}`);
    }
    