const userForm = document.getElementById("userForm");
const saveButton = document.getElementById("saveButton");
const userDataDiv = document.getElementById("userData");
const userDataTable = userDataDiv.querySelector("table");

saveButton.addEventListener("click", function () {
  // Собираем данные из формы
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const city = document.getElementById("city").value;
  const address = document.getElementById("address").value;
  const languages = [...document.querySelectorAll('input[name="languages"]:checked')].map(input => input.value);

  // Выводим данные в таблицу
  const tableHTML = `
    <tr><td>Имя:</td><td>${firstName}</td></tr>
    <tr><td>Фамилия:</td><td>${lastName}</td></tr>
    <tr><td>Дата рождения:</td><td>${dob}</td></tr>
    <tr><td>Пол:</td><td>${gender}</td></tr>
    <tr><td>Город:</td><td>${city}</td></tr>
    <tr><td>Адрес:</td><td>${address}</td></tr>
    <tr><td>Языки:</td><td>${languages.join(", ")}</td></tr>
  `;

  userDataTable.innerHTML = tableHTML;

  // Показываем блок с данными пользователя
  userDataDiv.classList.remove("hidden");
  // Скрываем форму
  userForm.classList.add("hidden");
});
