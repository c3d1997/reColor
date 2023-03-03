let btn = document.querySelectorAll('.colorBox__btn');
let change = document.getElementById('rdColor');
let clear = document.getElementById('clColor');

change.addEventListener('click', function () {
    let gradients1 =
        `linear-gradient(${deg()}deg,#${ColorCode()}, #${ColorCode()}),`
        ;
    let gradients2 =
        `linear-gradient(${deg()}deg,#${ColorCode()}, #${ColorCode()}),`
        ;
    let gradients3 =
        `linear-gradient(${deg()}deg,#${ColorCode()}, #${ColorCode()})`
        ;
    let regex = /\(([^)]+)\)/;
    let colorContent = document.querySelectorAll('.colorBox__cCode p');
    colorContent[0].innerHTML = gradients1.match(regex)[1];
    colorContent[1].innerHTML = gradients2.match(regex)[1];
    colorContent[2].innerHTML = gradients3.match(regex)[1];

    let colorBox = document.querySelector('.colorBox');
    colorBox.style.background = gradients1 + gradients2 + gradients3;


})
clear.addEventListener('click', function () {
    document.querySelector('.colorBox').style.background = 'white'
    let colorContent = document.querySelectorAll('.colorBox__cCode p');
    colorContent[0].innerHTML = '　';
    colorContent[1].innerHTML = '點選產生開始';
    colorContent[2].innerHTML = '　';
})

btn.forEach(function (item) {
    item.addEventListener('mousedown', down);
    item.addEventListener('mouseup', up);
    item.addEventListener('mouseleave', leave);
});

function down() {
    this.style.transition = '0.1s';
    this.style.transform = 'translate(3px, 2px)';
    this.style.boxShadow = '0px 0px';

}
function up() {
    this.style.transition = '0.1s';
    this.style.transform = 'translate(0px, 0px)';
    this.style.boxShadow = '6px 4px';

}
function leave() {
    this.style.transition = '';
    this.style.transform = '';
    this.style.boxShadow = '';
}

function Random() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 6));
    const randomValue = Math.random() < 0.5 ? randomNumber : randomLetter;
    return randomValue;
}


function deg() {
    const randomNumber = Math.floor(Math.random() * 360);
    return randomNumber;
}

function ColorCode() {
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += Random();
    }
    return code;
}

console.log(ColorCode());