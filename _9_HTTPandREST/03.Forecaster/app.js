function attachEvents() {
  const locationInput = document.getElementById("location");
  const submitBtn = document.getElementById("submit");

  const forecastContainer = document.getElementById("forecast");
  const currForecastContainer = document.getElementById('current');
  const upcomingForecastContainer = document.getElementById('upcoming');


  let locationName = "";
  let locationCode = "";

  const BASE_URL = "http://localhost:3030/jsonstore/forecaster/locations";
  const FORECAST_TODAY_URL = "http://localhost:3030/jsonstore/forecaster/today/";
  const UPCOMING_FORCAST = "http://localhost:3030/jsonstore/forecaster/upcoming/";

  submitBtn.addEventListener("click", forcastHandler);

  async function forcastHandler() {
    const locationValue = locationInput.value;

    let res = await fetch(BASE_URL);
    let arrLocations = await res.json();

    const weatherIcons = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
    }

    for (const { code, name } of arrLocations) {
      if (locationValue === name) {
        locationName = locationValue;
        locationCode = code;
      }
    }

    res = await fetch(`${FORECAST_TODAY_URL}${locationCode}`);
    let { name, forecast } = await res.json();

    forecastContainer.style.display = 'block';

    const divForecast = createElement('div', '', currForecastContainer, "", "forecasts");
    
    createElement('span', weatherIcons[forecast.condition], divForecast, "", "condition symbol")

    const spanCondition = createElement('span', '', divForecast, '', 'condition')

    createElement('span', `${name}`, spanCondition, '', 'forecast-data');
    createElement('span',` ${forecast.low}/${forecast.high}`, spanCondition, '', 'forecast-data');
    createElement('span', ` ${forecast.condition}`, spanCondition, '', 'forecast-data');

    res = await fetch(`${UPCOMING_FORCAST}${locationCode}`);

    //let { upName, upForecast} = res.json();

    let data = await res.json();

    const upDivForecast = createElement('div', '', upcomingForecastContainer, '', 'forecast-info');

    

    for (const curr in data.forecast) {
        const upSpanCondition = createElement('span', '', upDivForecast, '', 'upcoming');

        createElement('span', `${weatherIcons[data.forecast[curr].condition]}`, upSpanCondition, '', 'symbol', )
        createElement('span', `${data.forecast[curr].low}/${data.forecast[curr].high}`, upSpanCondition, '', 'forecast-data');
        createElement('span', `${data.forecast[curr].condition}`, upSpanCondition, '', 'forecast-data');
    }
}

  function createElement(
    type,
    content,
    parentNode,
    id,
    classes,
    attributes,
    useInnerHtml
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHtml = content;
    } else {
      if (content && type != "input") {
        htmlElement.textContent = content;
      }

      if (content && type === "input") {
        htmlElement.value = content;
      }
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes && classes > 0) {
        htmlElement.classList.add(classes);
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
    return htmlElement;
  }
}

attachEvents();
