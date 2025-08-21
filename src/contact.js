export function loadContact() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.innerHTML = "Odin's Contact";
  content.appendChild(headline);

  const about = document.createElement("div");
  about.innerHTML = "Odin's invitation required! Prove valor on the battlefield and for those worthy a valkryie will escort you to the restaurant.";
  content.appendChild(about);

}