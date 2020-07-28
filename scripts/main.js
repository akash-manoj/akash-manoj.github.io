let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedUserName = localStorage.getItem('name');
    myHeading.textContent = `Hello ${storedUserName} !`;
}

function setUserName() {
    let userName = prompt("Enter your name: ");
    if (!userName) {
        setUserName();
    } else {
        localStorage.setItem('name', userName);
        myHeading.textContent = `Hello ${userName} !`;
    }
}

myButton.onclick = function () {
    setUserName();
};

myImage.onclick = function () {
    let origImagePath = myImage.getAttribute('src');

    if (origImagePath === 'images/ps5.png') {
        myImage.setAttribute('src', 'images/ps5_black.jpg');
    } else {
        myImage.setAttribute('src', 'images/ps5.png');
    }
};