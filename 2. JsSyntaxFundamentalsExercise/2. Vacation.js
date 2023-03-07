function vacation(people, type, dayOfWeek) {

    let discount = 0;
    let price = 0
    switch (type) {
        case "Students":
            if (people >= 30) {
                discount = 0.15; 
            }
            switch(dayOfWeek) {
                case "Friday":
                    price = 8.45;
                    break;
                case "Saturday":
                    price = 8.80;
                    break;    
                case "Sunday":
                    price = 10.46;
                    break;
            }
            break;
        case "Business":
            if (people >= 100) {
                people -= 10;
            }
            switch(dayOfWeek) {
                case "Friday":
                    price = 10.90;
                    break;
                case "Saturday":
                    price = 15.60;
                    break;    
                case "Sunday":
                    price = 16;
                    break;
            }
            break;
           
        case "Regular":
            if (people >= 10 && people <= 20) {
                discount = 0.05
            }
            switch(dayOfWeek) {
                case "Friday":
                    price = 15;
                    break;
                case "Saturday":
                    price = 20;
                    break;    
                case "Sunday":
                    price = 22.5;
                    break;
            }
            break;
    }

    let total = ((price*(1 - discount)) * people).toFixed(2);

    console.log("Total price: " + total)
}

vacation(30,
    "Students",
    "Sunday"
    )