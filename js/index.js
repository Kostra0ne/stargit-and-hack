let julieWidget = document.querySelector('.julie-widget');
let matthieuWidget = document.querySelector('.matthieu-widget');
let welcomeWidget = document.querySelector('.welcome-container');

let julieName = document.querySelector('.julieName');
let matthieuName = document.querySelector('.matthieuName');

julieName.addEventListener('click', event => {
    julieWidget.classList.remove('hide');
    matthieuWidget.classList.add('hide');
    welcomeWidget.classList.add('hide');
    console.log("event listener julie");
});

matthieuName.addEventListener('click', event => {
    matthieuWidget.classList.remove('hide');
    julieWidget.classList.add('hide');
    welcomeWidget.classList.add('hide');
    console.log("event listener matthieu");
});

