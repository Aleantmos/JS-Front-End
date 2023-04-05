function attachEvents() {
    const LOCATIONS_URL = 'http://localhost:3030/jsonstore/forecaster/locations/';
    const TODAY_FORCAST_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const UPCOMING_FORCAST_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    const location = document.getElementById('location');
    const forcastBtn = document.getElementById('submit');

    const forcastContainer = document.getElementById('forecast');
    const currForcastContainer = document.getElementById('current');
    const upcomingForcastContainer = document.getElementById('upcoming');

    forcastBtn.addEventListener('click', getLocation);

    const weatherIcons = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
    }


    function getLocation() {
        fetch(LOCATIONS_URL)
            .then((res) => res.json())
            .then((info) => {

                forcastContainer.style.display = 'block';

                let locationName = null;
                let locationCode = null;
                for (const { name, code } of info) {
                    if (name === location.value) {
                        locationName = name;
                        locationCode = code;
                    }
                }

                fetch(`${TODAY_FORCAST_URL}${locationCode}`)
                    .then((res) => res.json())
                    .then((data) => {
                        const divForecasts = createELement('div', '', currForcastContainer, '', 'forecasts')

                        const weatherIconSpan = createELement('span', weatherIcons[data.forecast.condition], divForecasts, '', 'condition symbol')

                        const spanCondition = createELement('span', '', divForecasts, '', 'condition');

                        createELement('span', `${data.name}`, spanCondition, '', 'forecast-data');
                        createELement('span', `${data.forecast.low}°/${data.forecast.high}°`, spanCondition, '', 'forecast-data');
                        createELement('span', `${data.forecast.condition}`, spanCondition, '', 'forecast-data');
                    });

                fetch(`${UPCOMING_FORCAST_URL}${locationCode}`)
                    .then((res) => res.json())
                    .then((days) => {
                        const upcomingContainerChild = createELement('div', '', upcomingForcastContainer, '', 'forecast-info');
                      
                        for (const upcomingDay of days.forecast) {
                         
                            const spanUpcoming = createELement('span', '', upcomingContainerChild, '', 'upcoming');
                           
                            createELement('span', weatherIcons[upcomingDay.condition], spanUpcoming, '', 'symbol');
                            createELement('span', `${upcomingDay.low}°/${upcomingDay.high}°`, spanUpcoming, '', 'forecast-data');
                            createELement('span', `${upcomingDay.condition}`, upcomingContainerChild, '', 'forecast-data');
                        }
                    })
            })

    }

    function createELement(type, content, parentNode, id, classes, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type);

        if (content && useInnerHtml) {
            htmlElement.innerHtml = content;
        } else {
            if (content && type === 'input') {
                htmlElement.value = content;
            }

            if (content && type !== 'input') {
                htmlElement.textContent = content;
            }
        }

        if (classes && classes > 0) {
            htmlElement.classList.add(classes);
        }

        if (id) {
            htmlElement.id = id;
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        if (parentNode) {
            parentNode.append(htmlElement);
        }

        return htmlElement;
    }

}

attachEvents();