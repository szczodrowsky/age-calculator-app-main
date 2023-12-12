const dayField = document.getElementById("day");
const monthField = document.getElementById("month");
const yearField = document.getElementById("year");
const calcBtn = document.querySelector(".calc-buttton");
var dayNoValidLabel = document.getElementById("day-no-valid");
var monthNoValidLabel = document.getElementById("month-no-valid");
var yearNoValidLabel = document.getElementById("year-no-valid");
var emptyYearField = document.getElementById("year-empty");
var emptyMonthField = document.getElementById("month-empty");
var emptyDayField = document.getElementById("day-empty");
const valueYears = document.getElementById("value-years");
const valueMonths = document.getElementById("value-months");
const valueDays = document.getElementById("value-days");

calcBtn.addEventListener("click", () => {
  let day = dayField.value;
  let month = monthField.value;
  let year = yearField.value;

  if (0 < day && day <= 31) {
    dayNoValidLabel.classList.add("no-valid");
  } else {
    dayNoValidLabel.classList.remove("no-valid");
  }

  if (0 < month && month <= 12) {
    monthNoValidLabel.classList.add("no-valid");
  } else {
    monthNoValidLabel.classList.remove("no-valid");
  }

  if (year <= year) {
    yearNoValidLabel.classList.add("no-valid");
  } else {
    yearNoValidLabel.classList.remove("no-valid");
  }

  if (day === "0") {
    emptyDayField.classList.remove("empty");
  } else {
    emptyDayField.classList.add("empty");
  }

  if (month === "0") {
    emptyMonthField.classList.remove("empty");
  } else {
    emptyMonthField.classList.add("empty");
  }

  if (year === "0") {
    emptyYearField.classList.remove("empty");
  } else {
    emptyYearField.classList.add("empty");
  }

  let birthday = `${day}/${month}/${year}`;
  console.log(birthday);
  let birthdayObj = new Date(birthday);
  let ageDiff = Date.now() - birthdayObj;
  let ageDate = new Date(ageDiff);

  let ageDateDay = ageDate.getUTCDay();
  let ageDateMonth = ageDate.getUTCMonth();
  let ageDateYear = ageDate.getUTCFullYear() - 1970;

  valueDays.textContent = ageDateDay;
  valueMonths.textContent = ageDateMonth;
  valueYears.textContent = ageDateYear;
});
