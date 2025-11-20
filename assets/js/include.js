function includeHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.log(err));
}

// Load header
includeHTML("headerPlaceholder", "../../components/header.html");