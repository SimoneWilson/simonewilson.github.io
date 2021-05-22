// add info of favorite chapter
document.getElementById("add-to-list").addEventListener("click", function () {
  const x = document.getElementById("favchap").value;

  if (x !== "") {
    //create a new button
    const newBTN = document.createElement("button");
    newBTN.innerHTML = "\u274C";

    const newLI = document.createElement("li");
    newLI.textContent = x;
    newLI.appendChild(newBTN);

    document.getElementById("favs").appendChild(newLI);
    document.getElementById("favchap").value = "";

    //remove the item from the list
    newBTN.addEventListener("click", function () {
      document.getElementById("favs").removeChild(newLI);
      //set the cursor back in the input
      document.getElementById("favchap").focus();
    });

    //to user the enter button
    /* input = document.getElementById("favchap");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
      }
    });*/
  }
});
