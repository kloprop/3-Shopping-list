document.querySelector("#showAnswer").addEventListener("click", (e) => {
  document.querySelector("#answer").style.display = "block";
  document.querySelector("#answer").textContent = "An Impasta";
  e.target.style.display = "none";
});
selected = null;
document.querySelector("#tab-wrapper ul").addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    if (selected != null) {
      if (selected == e.target) {
        selected.classList.toggle("selected");
        document
          .querySelector(selected.dataset.clicked)
          .classList.toggle("active");
        return;
      } else {
        selected.classList.remove("selected");
        document
          .querySelector(selected.dataset.clicked)
          .classList.remove("active");
      }
    }

    selected = e.target;
    selected.classList.add("selected");
    document.querySelector(selected.dataset.clicked).classList.add("active");
  }
});

let box = document.querySelector("#hide");
box.addEventListener("change", () => {
  if (box.checked) {
    document.querySelector("#list-container").classList.add("close");
  } else {
    document.querySelector("#list-container").classList.remove("close");
  }
});
let add = document.querySelector("#add button");
add.addEventListener("click", addItem);
function addItem(e) {
  value = e.target.previousElementSibling.value;
  item = document.createElement("li");
  document.querySelector("#list").appendChild(item);
  para = document.createElement("p");
  para.textContent = value;
  document.querySelector("#list").lastElementChild.appendChild(para);
  btn = document.createElement("button");
  btn.textContent = "delete";
  item.appendChild(btn);

  e.target.previousElementSibling.value = null;
}
let list = document.querySelector("#list");
list.addEventListener("click", remove);
function remove(e) {
  if (e.target.tagName == "BUTTON") {
    e.target.parentNode.remove();
  }
}
document.querySelector("#search").addEventListener("keyup", find);
function find(e) {
  search = e.target.value.toLowerCase();
  items = document.querySelectorAll("#list li");
  arr = Array.from(items);
  arr.forEach((item) => {
    if (
      item.firstElementChild.textContent.toLowerCase().indexOf(search) != -1
    ) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
