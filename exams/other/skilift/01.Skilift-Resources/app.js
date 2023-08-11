window.addEventListener('load', solve);

function solve() {
   const inputDOMSelector = {
    firstName: document.querySelector('#first-name'),
    lastName: document.querySelector('#last-name'),
    peopleCnt: document.querySelector('#people-count'),
    fromDate: document.querySelector('#from-date'),
    daysCnt: document.querySelector('#days-count')
   }

   
   let currTicket = {};
   const ticketPreviewContainer = document.querySelector('.ticket-info-list');
   const confirmTicketContainer = document.querySelector('.confirm-ticket')
   const formContainer = document.querySelector('form');
   const mainDiv = document.getElementById('main');

   const nextStepBtn = document.querySelector('#next-btn');
   nextStepBtn.addEventListener('click', nextStepHandler)



   function nextStepHandler(e) {
    e.preventDefault();
    nextStepBtn.setAttribute('disabled', true);

    let allFieldsAreValid = Object.values(inputDOMSelector)
         .every((input) => input.value !== '');
    
    if (!allFieldsAreValid) {
        return;
    }

    const { firstName, lastName, peopleCnt, fromDate, daysCnt } = inputDOMSelector;
    currTicket = {
        firstName: firstName.value,
        lastName: lastName.value,
        peopleCnt: peopleCnt.value,
        fromDate: fromDate.value,
        daysCnt: daysCnt.value
    }
    

    const li = createElement('li', '', ticketPreviewContainer, '', ['ticket']);
    const article = createElement('article', '', li);
    createElement('h3', `Name: ${inputDOMSelector.firstName.value} ${inputDOMSelector.lastName.value}`, article);
    createElement('p', `From date: ${inputDOMSelector.fromDate.value}`, article);
    createElement('p', `For ${inputDOMSelector.daysCnt.value} days`, article);
    createElement('p', `For ${inputDOMSelector.peopleCnt.value}`, article);

    const editBtn = createElement('button', 'Edit', li, '', ['edit-btn']);
    editBtn.addEventListener('click', editHandler)

    const continueBtn = createElement('button', 'Continue', li, '', ['continue-btn']);
    continueBtn.addEventListener('click', continueHandler)
    formContainer.reset();

   }

   function editHandler(e) {

    ticketPreviewContainer.innerHTML = "";

    
    for (const key in currTicket) {
        inputDOMSelector[key].value = currTicket[key];
    }
    
    nextStepBtn.removeAttribute('disabled');

   }

   function continueHandler() {

    const liItem = this.parentNode;

    const editBtn = liItem.querySelector('.edit-btn');
    editBtn.remove();
    const continueBtn = liItem.querySelector('.continue-btn');
    continueBtn.remove();
    
    const confirmBtn = createElement('button', 'Confirm', liItem, '', ['confirm-btn']);
    confirmBtn.addEventListener('click', confirmHandler);

    confirmTicketContainer.appendChild(liItem);

    
    const cancelBtn = createElement('button', 'Cancel', liItem, '', ['cancel-btn']);
    cancelBtn.addEventListener('click', cancelHandler);
    ticketPreviewContainer.innerHTML = '';

   }

   function cancelHandler() {
    this.parentNode.remove();
    nextStepBtn.removeAttribute('disabled');

   }

   function confirmHandler() {
    const body = document.querySelector('#body');

    mainDiv.remove();

    createElement('h1', 'Thank you, have a nice day!', body, 'thank-you');
    const backBtn = createElement('button', 'Back', body, 'back-btn');
    backBtn.addEventListener('click', () => {
        window.location.reload();
    })

   }


   function createElement(type, content, parentNode, id, clazz, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type === "input") {
      htmlElement.value = content;
    }

    if (content && type !== "input") {
      htmlElement.textContent = content;
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (clazz) {
      htmlElement.classList.add(clazz);
    }

    if (attributes) {
      for (const key of attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;
  }
}


    
    
