// Personalized welcome message code
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Aanay\'s Portfolio, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Aanay\'s Portfolio, ' + storedName;
}

// Toggle Images
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');

document.getElementById('toggleImages').onclick = function() {
  image1.style.display = (image1.style.display === 'none' ? '' : 'none');
  image2.style.display = (image2.style.display === 'none' ? '' : 'none');
};
