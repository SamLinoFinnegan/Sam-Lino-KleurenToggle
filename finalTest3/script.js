//------------- variables --------------//

const imageBtn = document.querySelector(".img");
const myUl = document.querySelector('.ul');
const homeBtd = document.querySelector('.home')
const redBtd = document.querySelector('.red')
const yellowBtd = document.querySelector('.yellow')
const greenBtd = document.querySelector('.green')
const blueBtd = document.querySelector('.blue')
const myBody = document.querySelector('body')
const radGrayB = document.querySelector('.radioGray')
const radRB = document.querySelector('.radioRed')
const radYB = document.querySelector('.radioYellow')
const radGB = document.querySelector('.radioGreen')
const radBB = document.querySelector('.radioBlue')


//-------------- functions ---------------//

const makeGray = () => {
    myBody.classList.add('home')
    myBody.classList.remove('red')
    myBody.classList.remove('yellow')
    myBody.classList.remove('green')
    myBody.classList.remove('blue')
    myUl.classList.remove('visible')

}
const makeRed = () => {
    myBody.classList.add('red')
    myBody.classList.remove('home')
    myBody.classList.remove('yellow')
    myBody.classList.remove('green')
    myBody.classList.remove('blue')
    myUl.classList.remove('visible')
}
const makeYellow = () => {
    myBody.classList.add('yellow')
    myBody.classList.remove('home')
    myBody.classList.remove('red')
    myBody.classList.remove('green')
    myBody.classList.remove('blue')
    myUl.classList.remove('visible')
}
const makeGreen = () => {
    myBody.classList.add('green')
    myBody.classList.remove('home')
    myBody.classList.remove('yellow')
    myBody.classList.remove('red')
    myBody.classList.remove('blue')
    myUl.classList.remove('visible')
}
const makeBlue = () => {
    myBody.classList.add('blue')
    myBody.classList.remove('home')
    myBody.classList.remove('yellow')
    myBody.classList.remove('green')
    myBody.classList.remove('red')
    myUl.classList.remove('visible')
}
const makeListVisible = () => {
    myUl.classList.toggle('visible');
};

//------------- event listeners -----------//

radGrayB.addEventListener("click", makeGray)
radRB.addEventListener("click", makeRed)
radYB.addEventListener("click", makeYellow)
radGB.addEventListener("click", makeGreen)
radBB.addEventListener("click", makeBlue)

imageBtn.addEventListener("click", makeListVisible)

homeBtd.addEventListener("click", makeGray)
redBtd.addEventListener("click", makeRed)
yellowBtd.addEventListener("click", makeYellow)
greenBtd.addEventListener("click", makeGreen)
blueBtd.addEventListener("click", makeBlue)



