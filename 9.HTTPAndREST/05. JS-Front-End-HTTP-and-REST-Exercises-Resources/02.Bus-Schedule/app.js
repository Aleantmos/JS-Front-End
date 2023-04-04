function solve() {

    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';

    const infoBox = document.getElementById('info').childNodes[0];

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    
    
    let currId = 'depot'
    let currStopName = '';
    let nextId = '';


    
    function depart() {
        fetch(`${BASE_URL}${currId}`)
            .then((res) => res.json())
            .then((stopInfo) => {
                currStopName = stopInfo['name'];
                nextId = stopInfo['next'];
                infoBox.textContent = `Next stop ${currStopName}`;
                
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch((err) => {
                infoBox.textContent = `Error`;
                departBtn.disabled = true;
                departBtn.disabled = true;
            })
    }

    async function arrive() {
        infoBox.textContent = `Arriving at ${currStopName}`;
        currId = nextId;
        nextId = '';
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();