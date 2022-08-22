let playerExpense = 0;
function getValueFromInputFieldByID(elementId) {
  const inputField = document.getElementById(elementId);
  const expenseString = inputField.value;
  const totalExpense = parseFloat(expenseString);
  return totalExpense;
}

function setTextValueById(elementId, newValue) {
  const setExpense = document.getElementById(elementId);
  setExpense.innerText = newValue;
}

document
  .getElementById("btn-player-cost")
  .addEventListener("click", function () {
    const perPlayerCost = getValueFromInputFieldByID("per-player-expense");
    // console.log(perPlayerCost);
    const totalPlayerExpense = perPlayerCost * palyersName.length; //getting array.length from app.js
    playerExpense = playerExpense + totalPlayerExpense;
    setTextValueById("player-expense", totalPlayerExpense);
  });
