export function loadHome() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.innerHTML = "Odin's Restaurant";
  content.appendChild(headline);

  const about = document.createElement("div");
  about.innerHTML = "Welcome to Odin's Restaurant! We have a fine selection of meats, meads and salads to keep the warriors of Valhalla strong and healthy for the upcoming battles!";
  content.appendChild(about);

  const schedule = document.createElement("div");
  schedule.innerHTML = "Open all year round for all brave warriors until Valhalla comes!";
  content.appendChild(schedule);
}