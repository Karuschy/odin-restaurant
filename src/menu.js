export function loadMenu() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.innerHTML = "Odin's Menu";
  content.appendChild(headline);

  const about = document.createElement("div");
  about.innerHTML = "Mead from Gjallarhorn, sizzling meats, raw herring, and fresh salads";
  content.appendChild(about);
}