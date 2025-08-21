import "./styles.css";
import backgroundImg from "./backgroundImg.png";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

// Set the background image using CSS
document.body.style.backgroundImage = `url('${backgroundImg}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";

const content = document.getElementById("content");

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

loadHome();

homeButton.addEventListener('click', function () {
    content.innerHTML="";
    loadHome();
});

menuButton.addEventListener('click', function () {
    content.innerHTML="";
    loadMenu();
});

contactButton.addEventListener('click', function () {
    content.innerHTML="";
    loadContact();
});







