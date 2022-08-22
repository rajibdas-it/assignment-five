let palyersName = [];
function addToList(clickedBtn) {
  const playerName = clickedBtn.parentNode.parentNode.children[0].innerText;
  if (palyersName.length <= 4) {
    palyersName.push(playerName);
  } else {
    console.log("you cannot added more than 4");
  }
}

console.log(palyersName);
