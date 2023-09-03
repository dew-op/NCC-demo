// Loader Js
function load() {
  document.getElementById("loading").style.display = "none";
}

// -----Menu JS
const toggle = document.querySelector(".toggle-icon");
const box = document.querySelectorAll(".box");
const trigg = document.querySelector(".hamburger");
toggle.onclick = (e) => {
  trigg.classList.toggle("is-active");
  box[1].classList.toggle("collapsed");
};

// Menu shrink Js
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
if (vw >"760") {
  window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("NCC-Logo").classList.add("ncc_shrink");
      document.getElementById("IITR-Logo").classList.add("iitr_shrink");
      document.getElementById("navbar_links").classList.add("navbar_shrink");
    } else {
      document.getElementById("NCC-Logo").classList.remove("ncc_shrink");
      document.getElementById("IITR-Logo").classList.remove("iitr_shrink");
      document.getElementById("navbar_links").classList.remove("navbar_shrink");
    }
  }
} else {
  document.getElementById("navbar_links").classList.add("hide");
  // document.getElementById("nav-mb").classList.remove("hide");
}
// Footer JS
const footer = (id, icon) => {
  var element = document.getElementById(id);

  if (icon.classList.contains("fa-plus")) {
    icon.classList.replace("fa-plus", "fa-minus");
  } else icon.classList.replace("fa-minus", "fa-plus");
  element.classList.toggle(id + "_0");
};
