// add info of favorite chapter
document.getElementById("add-to-list").addEventListener("click", function () {
  const x = document.getElementById("favchap").value;

  if (x !== "") {
    //create a new button in html
    const newBTN = document.createElement("button");
    newBTN.innerHTML = "\u274C";

    const newLI = document.createElement("li");
    newLI.textContent = x;
    newLI.appendChild(newBTN);

    document.getElementById("favs").appendChild(newLI);
    document.getElementById("favchap").value = "";

    newBTN.addEventListener("click", function () {
      document.getElementById("favs").removeChild(newLI);
      document.getElementById("favchap").focus();
    });
  }
});
