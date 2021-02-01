let julieWidget = document.querySelector('.julie-widget');
let matthieuWidget = document.querySelector('.matthieu-widget');
let julieName = document.querySelector('.julieName');
let matthieuName = document.querySelector('.matthieuName');

julieName.addEventListener('click', event => {
    julieWidget.classList.remove('hide');
    matthieuWidget.classList.add('hide');
})

matthieuName.addEventListener('click', event => {
    matthieuWidget.classList.remove('hide');
    julieWidget.classList.add('hide');
})