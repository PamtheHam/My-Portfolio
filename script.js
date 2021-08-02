// 
// to do:
// add pdf of resume to a tile
// figure out why github and linkedin arent hyperlinks
// assemble all links to be submitted to bootcampspot for hw assignment




// 1. [Updated Portfolio](#updated-portfolio)
    // a. contact information
    // b. links to github and linkedin
    // c. downloadable pdf resume
    // d. display 2 examples of student work with:
        // project title, link to deployed version, link to repo, screenshot of app

// 2. [Updated GitHub Profile](#updated-github-profile)
    // a. a photo ❤️
    // b. a bio ❤️
    // c. email address ❤️
    // d. link to deployed portfolio ❤️
    // e. at least 2 pinned repos - every pinned repo should have a readme explaining the project, and contact info in the readme for collaborators
    // f. follow other classmates on github ❤️

// 3. [Updated Resume](#updated-resume)
    // a. heading should include: name ❤️, phone number❤️, email address❤️, linkedin❤️, portfolio❤️, github❤️
    // b. technical skills section with programming languages and technologies 
    // c. 3 strongest projects/homework assignments with brief description, languages used, and url


// 4. [Updated LinkedIn](#updated-linkedin) ❤️
    // a. strong bio statement ❤️
    // b. professional photo ❤️
    // c. links to github and portfolio ❤️

// 


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}