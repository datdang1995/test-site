// hover navbar
let dropdown = document.querySelector(".ml-auto li.dropdown");
let dropdownMenu = document.querySelector(".dropdown-menu");
let t;

let show = () => {
  dropdown.classList.add("show");
  dropdownMenu.classList.add("show");
};

let hide = () => {
  t = setTimeout(() => {
    dropdown.classList.remove("show");
    dropdownMenu.classList.remove("show");
  }, 500);
};

dropdown.addEventListener("mouseover", () => {
  show();
  clearTimeout(t);
});

dropdown.addEventListener("mouseleave", () => {
  hide();
});

// fix navbar cover content
$("#navMenu").resize(function() {
  $("#godown").height($("#navMenu").height() + 10);
});

if ($("#navMenu").height() > $("#godown").height()) {
  $("#godown").height($("#navMenu").height() + 10);
}
