const directoryUrl = "json/directory.json";

fetch(directoryUrl)
  .then((response) => response.json())
  .then((directory) => {
    console.log(directory);

    for (i = 0; i < directory.businesses.length; i++) {
      let outerDiv = document.createElement("div");
      outerDiv.classList.add("outer_div");

      let innerDiv = document.createElement("div");
      innerDiv.classList.add("inner_div_list");

      outerDiv.appendChild(innerDiv);

      let name = document.createElement("span");
      name.classList.add("inner_element");
      name.textContent = directory.businesses[i].businessName;

      let contact = document.createElement("span");
      contact.classList.add("inner_element");
      contact.textContent = directory.businesses[i].contact;

      let phone = document.createElement("span");
      phone.classList.add("inner_element");
      phone.textContent = directory.businesses[i].phone;

      let website = document.createElement("span");
      website.classList.add("inner_element");
      website.textContent = directory.businesses[i].website;

      let category = document.createElement("span");
      category.classList.add("inner_element");
      category.textContent = directory.businesses[i].category;

      innerDiv.appendChild(name);
      innerDiv.appendChild(contact);

      innerDiv.appendChild(phone);

      innerDiv.appendChild(website);

      innerDiv.appendChild(category);
      outerDiv.appendChild(document.createElement("br"));

      document.getElementById("directory_info").appendChild(outerDiv);
    }
  });

function toggleGrid() {
  let allChildren = document
    .getElementById("directory_info")
    .getElementsByClassName("outer_div");

  document.getElementById("directory_info").classList.add("directory_info_row");

  for (i = 0; i < allChildren.length; i++) {
    allChildren[i].children[0].classList.remove("inner_div_list");
    allChildren[i].children[0].classList.add("inner_div_grid");
  }
}

function toggleList() {
  let allChildren = document
    .getElementById("directory_info")
    .getElementsByClassName("outer_div");

  document
    .getElementById("directory_info")
    .classList.remove("directory_info_row");

  for (i = 0; i < allChildren.length; i++) {
    allChildren[i].children[0].classList.add("inner_div_list");
    allChildren[i].children[0].classList.remove("inner_div_grid");
  }
}
