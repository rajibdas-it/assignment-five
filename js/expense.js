let playerExpense = 0;
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

function setTextValueById(elementId, newValue) {
  const setExpense = document.getElementById(elementId);
  setExpense.innerText = newValue;
}

document
  .getElementById("btn-player-cost")
  .addEventListener("click", function () {
    const perPlayerExpense = getValueFromInputFieldByID("per-player-expense");
    // console.log(perPlayerCost);
    const totalPlayerExpense = perPlayerExpense * palyersName.length; //getting array.length from app.js
    playerExpense = playerExpense + totalPlayerExpense;
    setTextValueById("player-expense", totalPlayerExpense);
  });

document
  .getElementById("btn-total-cost")
  .addEventListener("click", function () {
    //console.log("button clicked");
    const managerExpense = getValueFromInputFieldByID("manager-expense");
    const coachExpense = getValueFromInputFieldByID("coach-expense");
    const totalExpense = playerExpense + managerExpense + coachExpense;
    console.log(totalExpense);
    setTextValueById("total-expense", totalExpense);
  });
