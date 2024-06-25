const inputs = document.querySelectorAll(".input");
const inputDate = document.querySelectorAll(".input-date");
const inputTime = document.querySelectorAll(".input-time");
const meridiem = document.getElementById("validation-meridiem");

const patterns = {
  name: /^[a-z\d]{1,8}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

const testCase = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const string = "test";
testCase.test("test");
string.match(testCase);

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

for (let input of inputs) {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
}

const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const quantity = document.querySelector(".quantity");

let currentPeople = 0;

decrement.addEventListener("click", () => {
  if (currentPeople === 0) {
    currentPeople = 0;
    quantity.textContent = `${currentPeople} People`;
  } else {
    currentPeople--;
    quantity.textContent = `${currentPeople} People`;
  }
});

increment.addEventListener("click", () => {
  currentPeople++;
  quantity.textContent = `${currentPeople} People`;
  if (currentPeople > 10) {
    alert("You can't make a reservation with more than 10 people");
    currentPeople = 10;
    quantity.textContent = `${currentPeople} People`;
  }
});
