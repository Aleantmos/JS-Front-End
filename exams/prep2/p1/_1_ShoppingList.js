function solve(data) {

    let groceries = data[0];
    let input = data.splice(1);

    let tokens =  groceries.split('!');

    let list = [];
    

    for (const el of tokens) {
        list.push(el);
    }

    let cnt = 0;

    while (input[cnt] != 'Go Shopping!') {
        tokens = input[cnt].split(" ");

        let command = tokens[0];
        let name = tokens[1];
        let contains = false;

        for (const element of list) {
            if (element === name) {
                contains = true;
            }
        }

        if (command === 'Urgent') {
            if (!contains) {
                let index = list.indexOf(name);
                if (index != 0) {
                    list.unshift(name);
                }
            };
        } else if (command === 'Unnecessary') {
            if (contains) {
                let index = list.indexOf(name);
                list.splice(index, 1);
            };
        } else if (command === 'Correct') {
            if (contains) {
                let index = list.indexOf(name);
                let newItem = tokens[2];
                list[index] = newItem;
            }

        } else if (command === 'Rearrange') {
            if (contains) {
                let index = list.indexOf(name);
                list.splice(index, 1);
                list.push(name);
            }
        }
        cnt++;
    
    }

    console.log(list.join(', '));
}

solve((["Milk!Pepper!Salt!Grapes!Water!Banana",
"Urgent Salt",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]))
