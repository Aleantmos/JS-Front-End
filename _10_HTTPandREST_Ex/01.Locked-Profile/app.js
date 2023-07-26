async function lockedProfile() {

    const BASE_URL = "http://localhost:3030/jsonstore/advanced/profiles";
    const profile = document.querySelector('.profile');
    const main = document.querySelector('#main');

    const loadData = async () => {
        const data = await fetch(BASE_URL);
        return await data.json();
    }

    const createElement = (data) => {
        const copyElement = profile.cloneNode(true);
        const [name, email, age] = Array.from(copyElement.querySelectorAll('input')).slice(2);
        const showInfo = copyElement.querySelector('.user1Username');

        name.value = data.username;
        email.value = data.email;
        age.value = data.age;

        showInfo.style.display = 'none';

        const showMoreBtn = copyElement.querySelector('button');
        showMoreBtn.addEventListener('click', showMoreHandler);
        
        return copyElement;
    
    }

    const showMoreHandler = () => {
        const e = event.target.parentElement
        const [lock, unlock] = e.querySelectorAll('input[type="radio"]')
        const showInfo = e.querySelector('.user1Username');

        if (unlock.checked) {
            showInfo.style.display = 'inline-block';
            event.target.textContent = 'Hide it';
        } else if (lock.checked) {
            showInfo.style.display = 'none';
            event.target.textContent = 'Show more'
        }

    }

    const loadDataToHtml = async (data) => {
        main.innerHTML = "";

        for (const key in data) {
            main.appendChild(createElement(data[key]))
        }
    }
    await loadDataToHtml(await loadData());
}









 