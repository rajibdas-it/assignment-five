//Create a function for getting input field value by using id as a parameter
function getValueFromInputFieldByID(elementId) {
  const inputField = document.getElementById(elementId);
  const expenseString = inputField.value;
  const expense = parseFloat(expenseString);
  if (expense <= 0) {
    alert("Expense Cannot be Zero or -");
  } else {
    return expense;
  }
}

//Create a function for set value in html tag
function setTextValueById(elementId, newValue) {
  const setExpense = document.getElementById(elementId);
  setExpense.innerText = newValue;
}
