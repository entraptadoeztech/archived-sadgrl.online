window.onload = () => {
  fetch("/archived-sadgrl.online/learn/includes/topSection.html")
    .then((data) => data.text())
    .then((data) => {
      document.getElementById("topSection").innerHTML = data;
    });

  fetch("/archived-sadgrl.online/learn/includes/footer.html")
    .then((data) => data.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });

  if (document.getElementById("endOfEntry")) {
    fetch("/archived-sadgrl.online/learn/includes/endOfEntry.html")
      .then((data) => data.text())
      .then((data) => {
        document.getElementById("endOfEntry").innerHTML = data;
      });
  }
};
