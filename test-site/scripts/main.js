var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg') {
      myImage.setAttribute ('src','images/FirefoxOS_for_press_release.png');
    } else {
      myImage.setAttribute ('src','images/firefox.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}