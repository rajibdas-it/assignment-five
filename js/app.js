let palyersName = []; //create an empty array for store selected player name

//create function for collect player name from card title
function addToList(clickedBtn) {
  const playerName = clickedBtn.parentNode.parentNode.children[0].innerText;
  if (palyersName.length <= 4) {
    palyersName.push(playerName);
    clickedBtn.disabled = true; //disable button after clicked.
    clickedBtn.style.background = "#9998a7";
  } else {
    alert("you cannot add more than 5 players");
  }
  displayListItem(palyersName); // show player name into selected V card
}

// Create funtion for append li into ol with dynamic
function displayListItem(palyersName) {
  const olList = document.getElementById("player-list");
  olList.innerHTML = "";
  for (i = 0; i < palyersName.length; i++) {
    player = palyersName[i];
    const li = document.createElement("li");
    li.innerText = player;
    // li.innerText = `${i + 1}. ${player}`;
    olList.appendChild(li);
  }
}
