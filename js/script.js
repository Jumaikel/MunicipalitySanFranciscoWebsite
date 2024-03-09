document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  performSearch();
});

function performSearch() {
  var searchTerm = document.getElementById("search-input").value.toLowerCase();
  var sections = document.querySelectorAll("h2,h3,h4,h5,h6,p");

  sections.forEach(function (section) {
    var sectionText = section.textContent.toLowerCase();
    if (sectionText.includes(searchTerm)) {
      window.location.href = "#" + section.parentElement.id;
    }
  });
}



