function loadTheBar(num) {

    let numBars = num / 10;
    let emptyBars = 10 - numBars;
    let bar = "[";
    for (let i = 0; i < numBars; i++) {
      bar += "%";
    }
    for (let i = 0; i < emptyBars; i++) {
      bar += ".";
    }
    bar += "]";

   if (numBars == 10) {
    let percent = `${num}% Complete!`
    console.log(percent);
    console.log(bar);
   } else {
    let percent = `${num}% ${bar}`;
    let helper = "Still loading...";  
    console.log(percent);
    console.log(helper);
   }
}

loadTheBar(40);