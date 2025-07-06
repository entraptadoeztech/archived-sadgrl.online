document.addEventListener("DOMContentLoaded", function() {
    // var openTip = false;
    // // in progress
    // function generateTooltips() {
    //     var tooltips = document.querySelectorAll(".tooltip-area");

    //     tooltips.forEach((tooltip, indx) => {
    //         tooltip.addEventListener("click", revealTip);

    //         function revealTip(e) {
    //             console.log("hello");
    //             // may not need this:
    //             openTip = true;

    //             // get positions for where to place the expanded tip
    //             var rect = e.target.getBoundingClientRect();
    //             var left = rect.left + window.scrollX;
    //             var top = rect.top + window.scrollY;

    //             // create an element and assign it a div
    //             var div = document.createElement('div');
    //             div.classList.add("tooltip-expand");
    //             div.setAttribute("id", "tooltip-expand");
    //             //div.innerText += e.target.nextElementSibling.innerText;

    //             // take the text from the div on the page and insert it
    //             var text = document.createTextNode(e.target.nextElementSibling.innerText);
    //             div.append(text);

    //             // set styles
    //             // this offsets the tooltip to be below the text
    //             var newTop = (top + 30);
    //             div.style.top = newTop + "px";
    //             div.style.left = left + "px";
    //             div.style.backgroundColor = "var(--background)";
    //             div.style.width = "300px";

    //             // append the div to the container
    //             document.getElementById('container').append(div);

    //             div.addEventListener("click", close);

    //             function close(e) {
    //                 e.target.remove();
    //             }
    //         }
    //     });
    // }
    // generateTooltips();

    // dynamically adds fontawesome icons to elements with the callout class
    function addCalloutIcons() {
        var tips = document.querySelectorAll(".note");

        tips.forEach((tip, indx) => {
            var icon = `<i class="fa-solid fa-pencil calloutIcon"></i>`;
            tip.innerHTML += icon;
            tip.style.backgroundColor = "";
        });
    }

    addCalloutIcons();

    // copy text to clipboard when code area is clicked
    var codeArea = document.querySelectorAll('code');
    codeArea.forEach(function(item) {
        item.addEventListener("click", copyCode);
    })

    function copyCode(e) {
        navigator.clipboard.writeText(e.target.innerHTML);
        copyNotify();
    }

    function copyNotify() {
        var copied = document.getElementById('copied');
        copied.style.display = "block";
        setTimeout(function() {
            copied.style.display = "none";
        }, 1000)
    }

    // generates table of contents links for some articles
    function generateAnchors() {
        console.log("generating Anchors");
        var h2s = document.querySelectorAll("#main > h2");
        if (h2s) {
            var anchors = document.getElementById("anchors");
            var h1 = document.querySelectorAll("h1")[0].innerText;
            console.log(h1);

            var p = document.createElement('p');

            h2s.forEach((h2, indx) => {
                var link = document.createElement("a");
                var linkName = document.createTextNode(h2.innerText);
                var id = h2.getAttribute("id");
                // set the anchor link
                link.setAttribute("href", "#" + id);
                link.appendChild(linkName);
                var li = document.createElement("li");
                anchors.append(li);
                li.appendChild(link);
            });
            console.log(h2s.length);
            if (h2s.length === 0) {
                p.innerText = '';
            } else {
                p.innerText = "Contents";
            }
            p.style.fontWeight = "bold";

            document.getElementById('anchors').prepend(p);
        }
    }
    generateAnchors();


    // theme switching and handling
    var themeButton = document.getElementById('changeMode');
    themeButton.addEventListener('click', changeTheme);
    var currentTheme;
    var changeModeBtn = document.getElementById('changeMode');
    // this part runs on load to read theme from local memory
    if (localStorage.getItem("currentTheme") !== null) {
        currentTheme = localStorage.getItem("currentTheme");


        if (currentTheme === "dark") {
            changeModeBtn.innerHTML = '☀️';
            darkTheme();

        } else {
            changeModeBtn.innerHTML = '🌙';
            lightTheme();
        }

    } else {
        //console.log('no stored theme');
        currentTheme = "dark";
        changeModeBtn.innerHTML = '☀️';
        darkTheme();
    }


    function changeTheme(e) {
        // get current theme
        //console.log('changing theme');
        //console.log(currentTheme);
        if (currentTheme === "light") {

            currentTheme = "dark";
            console.log("applying dark theme");
            e.target.innerText = '☀️';
            darkTheme();
        } else {
            e.target.innerText = '🌙';
            currentTheme = "light";
            console.log("applying light theme");
            lightTheme();

        }
    }

    function darkTheme() {
        var darkTheme = document.getElementById('darkTheme');
        var lightTheme = document.getElementById('lightTheme');
        darkTheme.removeAttribute('disabled', '');
        lightTheme.setAttribute('disabled', '');
        localStorage.setItem('currentTheme', currentTheme);

    }

    function lightTheme() {
        var darkTheme = document.getElementById('darkTheme');
        var lightTheme = document.getElementById('lightTheme');
        var changeModeBtn = document.getElementById('changeMode');
        lightTheme.removeAttribute('disabled', '');
        darkTheme.setAttribute('disabled', '');
        localStorage.setItem('currentTheme', currentTheme);
    }


    // search bar on some pages
    var searchBar = document.getElementById('searchBox');

    if (searchBar) { // checks if a searchbar even exists before executing
        searchBar.addEventListener("keyup", searchList);

        function searchList(e) {
            console.log('searching...');
            var listItems = document.querySelectorAll('.searchable > li');
            listItems.forEach((item) => {
                var title = item.innerText;
                var value = e.target.value;
                if (title.includes(value)) {
                    console.log('nothing');
                    item.style.display = "list-item";

                } else {
                    item.style.display = "none";
                }
            });
        }
    }
});