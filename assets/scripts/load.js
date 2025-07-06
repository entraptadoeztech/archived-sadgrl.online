window.onload = () => {
  console.log("hi");
  // banner
  const containerDiv = document.querySelector("#container");
  const bannerDiv = document.createElement("div");
  bannerDiv.style.backgroundColor = "#ff9696";
  bannerDiv.style.color = "black";
  bannerDiv.style.padding = "10px";
  bannerDiv.innerHTML = `This is an archived and therefore outdated version of <a style="color:blue;" href="https://sadgrl.online">sadgrl.online</a>`;

  containerDiv.prepend(bannerDiv);

  /* SIDEBAR & FOOTER LOAD START */

  fetch("/archived-sadgrl.online/assets/templates/nav.html") // the page we want to use for our sidebar
    .then((data) => {
      return data.text();
    })
    .then((data) => {
      document.getElementById("nav").innerHTML = data; // inserts to element id="navbar"
    });

  /* SIDEBAR & FOOTER LOAD END */

  /* THEME SWITCHER START */

  function catCafe() {
    document.documentElement.style.setProperty("--background", "#D6D8CC");
    document.documentElement.style.setProperty(
      "--titleBars",
      "url('/archived-sadgrl.online/assets/images/tiny-bar-brwn.png')"
    );
    document.documentElement.style.setProperty(
      "--banner",
      "url('/archived-sadgrl.online/assets/images/full-banner-cafe.png')"
    );
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--link-color", "black");
    document.documentElement.style.setProperty(
      "--background-img",
      "url('/archived-sadgrl.online/assets/images/calico-bg.png')"
    );
    document.documentElement.style.setProperty(
      "--border",
      "1px solid #8F563B;"
    );
    document.documentElement.style.setProperty(
      "--arrows",
      "url('/archived-sadgrl.online/assets/images/arrow-brwn.png')"
    );
  }

  function sadGrl() {
    document.documentElement.style.setProperty("--background", "#0E191A");
    document.documentElement.style.setProperty(
      "--titleBars",
      "url('/archived-sadgrl.online/assets/images/tiny-bar-2.png')"
    );
    document.documentElement.style.setProperty(
      "--banner",
      "url('/archived-sadgrl.online/assets/images/full-banner-new.png')"
    );
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--link-color", "#B5E61D");
    document.documentElement.style.setProperty(
      "--background-img",
      "url('https://sadhost.neocities.org/images/borders/bg-test-green.png')"
    );
    document.documentElement.style.setProperty("--border", "1px solid black");
    document.documentElement.style.setProperty(
      "--arrows",
      "url('/archived-sadgrl.online/assets/images/arrow.png')"
    );
  }
  if (localStorage.getItem("currentTheme")) {
    if (localStorage.getItem("currentTheme") === "catcafe") {
      catCafe();
    }
  }
  /* create the dropdown */
  var sideBar = document.querySelectorAll("aside")[0];
  var themeDiv = document.createElement("div");
  themeDiv.setAttribute("id", "themeDiv");

  var select = document.createElement("select");
  select.setAttribute("name", "themePicker");
  select.setAttribute("id", "themePicker");
  select.style.marginLeft = "10px";
  select.style.marginBottom = "10px";

  var option0 = document.createElement("option");
  var option1 = document.createElement("option");
  var option2 = document.createElement("option");
  option0.value = "chooseTheme";
  option1.value = "sadgrl";
  option2.value = "catcafe";
  option0.innerText = "Choose theme";
  option1.innerText = "sadgrl.online";
  option2.innerText = "cozy cat cafe";

  select.append(option0);
  select.append(option1);
  select.append(option2);

  themeDiv.append(select);

  sideBar.append(themeDiv);

  select.addEventListener("change", changeTheme);

  function changeTheme(e) {
    var value = e.target.value;
    console.log(value);

    if (value === "catcafe") {
      catCafe();
      localStorage.setItem("currentTheme", value);
    } else if (value === "sadgrl") {
      sadGrl();
      localStorage.setItem("currentTheme", value);
    }
  }

  /* THEME SWITCHER END */
};
