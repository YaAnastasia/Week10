// Создать функцию, которая выведет сообщение в консоли «Я учу JavaScript!»
function showMessage(){
    console.log(`Я учу JavaScript!`);
}
showMessage();

//Создать галлерею переключения изображений
const sliderblock = document.querySelector('.slider-block');
const sliderPrev = document.querySelector('.slider-previous');
const sliderNext = document.querySelector('.slider-next');
let shift; //смещение влево
shift = 0;


sliderPrev.addEventListener('click', () => {
    shift = shift - 660;
    if (shift < 0){
        shift = 660;
    }
    sliderblock.style.left = - shift + 'px';
});

sliderNext.addEventListener('click', () => {
    shift = shift + 660;
    if (shift > 660){
        shift = 0;
    }
    sliderblock.style.left = - shift + 'px';
});