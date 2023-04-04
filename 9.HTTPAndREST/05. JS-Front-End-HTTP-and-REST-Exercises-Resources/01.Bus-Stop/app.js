function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';

    const stopId = document.getElementById('stopId').value;

    const stopName = document.getElementById('stopName');
    const busesContainer = document.getElementById('buses')

    fetch(`${BASE_URL}${stopId}`)
        .then((res) => res.json())
        .then((stopInfo) => {
            const { name, buses } = stopInfo;
            stopName.textContent = name;

            for (const busId in buses) {
                const li = document.createElement('li');

                li.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`
                busesContainer.append(li);
            }
        })
        .catch(() => {
            console.error('Bad Id');
        })
}