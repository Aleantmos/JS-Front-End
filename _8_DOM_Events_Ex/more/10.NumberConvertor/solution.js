function solve() {

    const options = document.querySelector('#selectMenuTo');
    const input = document.querySelector('#input');
    const output = document.querySelector('#result');

    const btn = document.querySelector('button');

    btn.addEventListener('click', convert);

    const optionsList = {
        'Binary': 'binary',
        'Hexadecimal': 'hexadecimal'
    };


    for (const key in optionsList) {
        let option = document.createElement('option');

        option.value = optionsList[key];
        option.text = key;

        options.appendChild(option);
    }

    function convert() {
        let [ number, selected ] = [Number(input.value), options.value];

        if (selected === 'binary') {
            output.value = number.toString(2);
        } else if (selected === 'hexadecimal') {
            output.value = number.toString(16).toUpperCase();
        }
    }

}