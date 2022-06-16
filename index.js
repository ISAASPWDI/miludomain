const yesbtn = document.querySelector('#yesbtn');
yesbtn.addEventListener('click',function() {
    alert('jeje espero que te haya gustado este pequeño detalle que lo hice con esfuerzo y dedicación para ti :3, "La felicidad se puede encontrar hasta en los más oscuros momentos, si somos capaces de usar bien la luz" — Albus Dumbledore; Harry Potter y el prisionero de Azkaban.')
} );

const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*820);
    const randomY = parseInt(Math.random()*820);
    nobtn.style.setProperty('top',randomY+'%');
    nobtn.style.setProperty('left',randomX+'%');
    nobtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})