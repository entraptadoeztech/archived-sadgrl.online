document.addEventListener("DOMContentLoaded", function () {
  var genBtn = document.getElementById("genHTML");
  var htmlOutput = document.getElementById("output");
  var layout = document.getElementById("layout");
  var sidebarOption = document.querySelector("#sidebarOptions");
  var headerOption = document.querySelector("#headerOptions");
  var footerOption = document.querySelector("#footerOptions");
  var navbarOption = document.querySelector("#navbarOptions");
  var output = document.getElementById("output");
  var outputArea = document.getElementById("outputArea");
  var topBarOption = document.getElementById("topBarOption");
  var headerHeightOption = document.getElementById("headerHeight");
  var spaceOption = document.getElementById("spaceOption");
  var minimizeBtn = document.getElementById("minimize");
  var maximizeBtn = document.getElementById("maximize");
  var instructionsDiv = document.getElementById("instructions");

  headerHeightOption.value = "150";

  genBtn.addEventListener("click", generateHTML);

  function generateHTML() {
    outputArea.style.display = "block";
    console.log("click");
    htmlOutput.innerHTML += layout.innerHTML;
    console.log(layout.innerHTML);
  }

  // adds option to logic
  sidebarOption.addEventListener("change", sidebars);
  headerOption.addEventListener("change", headers);
  footerOption.addEventListener("change", footers);
  navbarOption.addEventListener("change", navbars);
  topBarOption.addEventListener("change", topbars);
  headerHeightOption.addEventListener("change", changeHeaderHeight);
  minimizeBtn.addEventListener("click", minimizePanel);
  maximizeBtn.addEventListener("click", maximizePanel);
  spaceOption.addEventListener("click", spacing);

  function spacing() {
    if (this.checked === true) {
      if (checkIfExists("leftSidebar")) {
        document.getElementById("leftSidebar").style.marginRight = 10 + "px";
      }
      if (checkIfExists("rightSidebar")) {
        document.getElementById("rightSidebar").style.marginLeft = 10 + "px";
      }
      if (checkIfExists("navbar")) {
        document.getElementById("navbar").style.marginBottom = 10 + "px";
      } else {
        document.getElementById("header").style.marginBottom = 10 + "px";
      }
      if (checkIfExists("footer")) {
        document.getElementById("footer").style.marginTop = 10 + "px";
      }
    } else {
      if (checkIfExists("leftSidebar")) {
        document.getElementById("leftSidebar").style.marginRight = 0 + "px";
      }
      if (checkIfExists("rightSidebar")) {
        document.getElementById("rightSidebar").style.marginLeft = 0 + "px";
      }
      if (checkIfExists("navbar")) {
        document.getElementById("navbar").style.marginBottom = 0 + "px";
      } else {
        document.getElementById("header").style.marginBottom = 0 + "px";
      }
      if (checkIfExists("footer")) {
        document.getElementById("footer").style.marginTop = 0 + "px";
      }
    }
  }

  function maximizePanel(event) {
    event.preventDefault();
    instructionsDiv.style.display = "block";
  }

  function minimizePanel(event) {
    event.preventDefault();
    instructionsDiv.style.display = "none";
  }

  function changeHeaderHeight() {
    document.getElementById("header").style.height = this.value + "px";
  }

  function topbars() {
    if (this.checked === true) {
      console.log("hi");
      console.log(this.checked);
      var topbar = document.createElement("div");
      topbar.setAttribute("id", "topBar");
      topbar.innerHTML =
        "You can put some text or images (or even a good old-fashioned marquee) up here!";
      document.getElementById("container").prepend(topbar);
    } else {
      document.getElementById("topBar").remove();
    }
  }

  function sidebars() {
    var flex = document.getElementById("flex");

    function createSidebar(which) {
      var aside = document.createElement("aside");
      aside.setAttribute("id", which);
      aside.innerHTML = `<h2>Updates</h2>
            <div class="box">
                <p>I have recently updated this tool as of August 2022!</p>
                <ul style="padding-left:10px;">
                    <li>Rewrote the JS to generate cleaner code</li>
                    <li>Rewrote the CSS in a way that hopefully makes much more sense to edit</li>
                    <li>Added a couple of new features!</li>
                    <li>Old version is still available <a href="old.html" target="_blank">here</a></li>
                </ul>
            </div>
            <h2>Hi there!</h2>
            <h3>Other Tools</h3>
            <ul>
                <li><a href="https://sadgrlonline.github.io/html-cheatsheet/" target="_blank">HTML Cheatsheet</a>
                <li><a href="webmastery/webmaster-links.html" target="_blank">Webmaster Links</a></li>
                <li><a href="webmastery/downloads/tiledbgs.html" target="_blank">Tiled BGs</a></li>
                <li><a href="webmastery/downloads/fonts.html" target="_blank">Fonts</a></li>
                <li><a href="projects/ideas/" target="_blank">Site Ideas</a></li>
            </ul>`;
      flex.append(aside);
    }

    // both sidebars
    if (this.value == "bothSidebars") {
      if (!checkIfExists("rightSidebar")) {
        createSidebar("rightSidebar");
      }
      if (!checkIfExists("leftSidebar")) {
        createSidebar("leftSidebar");
      }
    }

    // left sidebar
    if (this.value === "leftSidebar") {
      if (checkIfExists("rightSidebar")) {
        // if r sidebar exists
        rightSidebar.remove(); // remove it
      } else {
        // if it doesn't exist
        console.log("right sidebar does not exist"); // do nothing
      }

      if (!checkIfExists(this.value)) {
        // if r sidebar exists
        createSidebar(this.value);
      }
    }

    // right sidebar
    if (this.value === "rightSidebar") {
      if (checkIfExists("leftSidebar")) {
        // if l sidebar exists
        leftSidebar.remove(); // remove it
      } else {
        // if it doesn't exist
        console.log("left sidebar does not exist");
        var aside = document.createElement("aside");
        aside.setAttribute("id", "leftSidebar");
        flex.append(aside);
      }

      createSidebar(this.value);
    }

    // no sidebars
    if (this.value === "noSidebars") {
      if (checkIfExists("rightSidebar")) {
        // if r sidebar exists
        document.getElementById("rightSidebar").remove();
      }
      if (checkIfExists("leftSidebar")) console.log("leftSidebar exists");
      document.getElementById("leftSidebar").remove();
    }
  }

  function headers() {
    if (this.value == "header") {
      var header = document.createElement("div");
      header.setAttribute("id", "header");
      document.getElementById("container").prepend(header);
    } else if (this.value == "noHeader") {
      document.getElementById("header").remove();
    }
  }

  function footers() {
    if (this.value === "footer") {
      var footer = document.createElement("footer");
      footer.setAttribute("id", "footer");
      document.getElementById("container").append(footer);
    } else if (this.value == "noFooter") {
      document.getElementById("footer").remove();
    }
  }

  function navbars() {
    if (this.value === "navbar") {
      var navbar = document.createElement("nav");
      navbar.setAttribute("id", "navbar");
      navbar.innerHTML = `<ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
              </ul>`;
      document.getElementById("headerArea").append(navbar);
    } else {
      document.getElementById("navbar").remove();
    }
  }

  function checkIfExists(element) {
    if (document.getElementById(element)) {
      //console.log("element exists");
      return true;
    } else {
      //console.log("element does not exist");
      return false;
    }
  }
});

// to do:
// make guide on changing the container width to keep it responsive
