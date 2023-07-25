function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/students";
  const tableBody = document.querySelector("#results > tbody");
  const submitStudentBtn = document.getElementById("submit");

  const [firstName, lastName, fNumber, grade] =
    document.querySelectorAll(".inputs > input");

  loadAllStudents();
  submitStudentBtn.addEventListener("click", addStudentHandler);

  function addStudentHandler() {
    const newStudent = {
      firstName: firstName.value,
      lastName: lastName.value,
      facultyNumber: fNumber.value,
      grade: grade.value,
    };
    if (validateStudent(newStudent)) {
      const httpHeaders = {
        method: "POST",
        body: JSON.stringify(newStudent),
      };

      fetch(`${BASE_URL}`, httpHeaders).then(() => {
        firstName.value = "";
        lastName.value = "";
        fNumber.value = "";
        grade.value = "";
        tableBody.innerHTML = "";
        loadAllStudents();
      });
    }
  }

  function validateStudent(studentToValidate) {
    for (const field in studentToValidate) {
      if (field.trim().length === 0) {
        return false;
      }
    }
    return true;
  }

  function loadAllStudents() {
    fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((students) => {
        for (const curr in students) {
          const tr = createElement("tr", "", tableBody);
          createElement("td", students[curr].firstName, tr);
          createElement("td", students[curr].lastName, tr);
          createElement("td", students[curr].facultyNumber, tr);
          createElement("td", students[curr].grade, tr);
        }
      });
  }

  function createElement(type, content, parentNode, id, clazz, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type === "input") {
      htmlElement.value = content;
    }

    if (content && type != "input") {
      htmlElement.textContent = content;
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (clazz) {
      htmlElement.class = clazz;
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
