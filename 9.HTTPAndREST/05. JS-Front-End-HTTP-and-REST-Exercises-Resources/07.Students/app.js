function attachEvents() {
  const STUDENTS_URL = 'http://localhost:3030/jsonstore/collections/students';

  const [firstName, lastName, fNumber, grade] = Array.from(document.querySelectorAll('.inputs > input'));
  const tableBody = document.querySelector('#results > tbody');
  loadStudents();
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', addStudentHandler);

  function addStudentHandler() {
    const newStudent = {
      firstName: firstName.value,
      lastName: lastName.value,
      facultyNumber: fNumber.value,
      grade: grade.value
    }

    if (validateStudent(newStudent)) {
      const httpHeaders = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newStudent)
      };

      fetch(`${STUDENTS_URL}`, httpHeaders)
        .then(() => {
          firstName.value = '';
          lastName.value = '';
          fNumber.value = '';
          grade.value = '';
          tableBody.innerHTML = '';
          loadStudents();
        })
        .catch((err) => {
          console.error(err);
        });


    }
  }

  function loadStudents() {
    fetch(`${STUDENTS_URL}`)
      .then((res) => res.json())
      .then((students) => {
        for(const curr in students) {
          const tr = createElement('tr', '', tableBody)
          createElement('td', students[curr].firstName, tr);
          createElement('td', students[curr].lastName, tr);
          createElement('td', students[curr].facultyNumber, tr);
          createElement('td', students[curr].grade, tr);
        }
      })
      .catch((err) => {
        console.err(err);
      })
  }

  function validateStudent(studentToValidate) {

    for (const field in studentToValidate) {
      if (field.trim().length === 0) {
        return false;
      }
    }
    return true;
  }

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type === 'input') {
      htmlElement.value = content;
    }

    if (content && type !== 'input') {
      htmlElement.textContent = content;
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes) {
      htmlElement.classList.add(classes);
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}

attachEvents();