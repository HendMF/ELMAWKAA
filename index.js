const select = document.querySelector('.select');
const saudia = document.querySelector('.saudia');

select.addEventListener('click', (e) => {
    saudia.classList.toggle('active');
});