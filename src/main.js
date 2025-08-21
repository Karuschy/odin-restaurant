import "./styles.css";
import backgroundImg from "./backgroundImg.png";
import { loadHome } from "./home.js";

// Set the background image using CSS
document.body.style.backgroundImage = `url('${backgroundImg}')`;
document.body.style.backgroundSize = "cover"; 
document.body.style.backgroundRepeat = "no-repeat"; 


loadHome();






