var images = document.getElementById('bgs').querySelectorAll('img');
var bg = document.getElementById('bg');


images.forEach((el) => el.addEventListener('mouseover', (event) => bg.style.backgroundImage = 'url(' + el.src + ')' ));