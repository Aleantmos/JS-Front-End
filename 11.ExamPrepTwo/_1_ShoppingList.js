function shopping(input) {

    let itemsString = input.shift();
    let items = itemsString.split("!");



    let operations = input.length;


    for (let i = 0; i < operations; i++) {
        let command = input[i].split(" ")[0];
        let currItem = input[i].split(" ")[1];

        let index = -1;
        switch (command) {
            case "Urgent":
                if (!items.includes(currItem)) {
                    items.unshift(currItem);
                }
                break;
            case "Unnecessary":
                index = items.indexOf(currItem);

                if (index !== -1) {
                    items.splice(index, 1);
                }
                break;
            case "Correct":
                index = items.indexOf(currItem);
                if (index !== -1) {
                    items[index] = currItem;
                }
                break;
            case "Rearrange":
                index = items.indexOf(currItem);
                if (index !== 1) {
                    items.push(items.splice(index, 1)[0]);
                }
                break;
        }
    }
    items.join(", ");
    console.log(items);
}

shopping((["Tomatoes!Potatoes!Bread!Milk",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
)