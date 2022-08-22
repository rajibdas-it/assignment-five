let palyersName = [];
function addToList(clickedBtn) {
  const playerName = clickedBtn.parentNode.parentNode.children[0].innerText;
  if (palyersName.length <= 4) {
    palyersName.push(playerName);
    clickedBtn.disabled = true;
    // clickedBtn.setAttribute("disable", true);
  } else {
    alert("you cannot added more than 4");
  }
  const olList = document.getElementById("player-list");
  for (i = 0; i < palyersName.length; i++) {
    player = palyersName[i];
    const li = document.createElement("li");
    // li.innerText = "";
    li.innerText = `${i + 1}. ${player}`;
    olList.appendChild(li);

    console.log(player);
  }
  //   const li = document.createElement("li");
  //   li.innerText = playerName;
  //   olList.appendChild(li);
  //   li.innerText = "";

  console.log(palyersName);
}
