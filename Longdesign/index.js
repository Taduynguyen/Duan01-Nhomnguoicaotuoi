const titles = document.getElementsByClassName("title-tag");
const tags = document.getElementsByClassName("tag");
for (let i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("tag-active");
    current[0].className = current[0].className.replace(" tag-active", "");
    this.className += " tag-active";
  });
}

function headerMenu() {
  const x = document.getElementById ("menuBtns");
  if (x.className === "menu-btn") {
    x.className += " responsive";
  } else {
    x.className = "menu-btn";
  }
}