var tab_links = document.getElementsByClassName("tab_links");
var tab_contents = document.getElementsByClassName("tab_contents");

function open_tab(tab_name) {
  for (tab_link of tab_links) {
    tab_link.classList.remove("active_link");
  }
  for (tab_content of tab_contents) {
    tab_content.classList.remove("active_tab");
  }
  event.currentTarget.classList.add("active_link");
  document.getElementById(tab_name).classList.add("active_tab");
}

var side_menu = document.getElementById("side_menu");

function open_menu() {
  side_menu.style.right = "0";
}

function close_menu() {
  side_menu.style.right = "-250px";
}
