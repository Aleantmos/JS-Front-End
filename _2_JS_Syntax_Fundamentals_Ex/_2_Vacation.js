function solve(peopleCnt, groupType, dayOfWeek) {
  let discount = 0;
  let price = 0;

  switch (groupType) {
    case 'Students':

    if (peopleCnt >= 30) {
        discount = 0.15;
    } 
    if (dayOfWeek === "Friday") {
        price = 8.45;
      } else if (dayOfWeek === "Saturday") {
        price = 9.8;
      } else if (dayOfWeek === "Sunday") {
        price = 10.46;
      }
      break;
    case 'Business':
        if (peopleCnt >= 100) {
            peopleCnt = peopleCnt - peopleCnt / 10;
        }
      if (dayOfWeek === "Friday") {
        price = 10.9;
      } else if (dayOfWeek === "Saturday") {
        price = 15.6;
      } else if (dayOfWeek === "Sunday") {
        price = 16;
      }
      break;
    case 'Regular':
      if (peopleCnt >= 10 && peopleCnt <= 20) {
        discount = 0.05;
      }
      if (dayOfWeek === "Friday") {
        price = 15;
      } else if (dayOfWeek === "Saturday") {
        price = 20;
      } else if (dayOfWeek === "Sunday") {
        price = 22.5;
      }
      break;
  }

  total = price * peopleCnt;

  let discounted = total * (1 - discount);

  console.log(`Total price: ${discounted.toFixed(2)}`)
}

solve(30,
    "Students",
    "Sunday"
    )