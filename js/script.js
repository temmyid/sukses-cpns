

const imgSecond = document.querySelector('.content-right img:last-child');

imgSecond.addEventListener('mouseover', () => {
    document.querySelector('.content-right img:first-child').style.opacity = 0;
});

imgSecond.addEventListener('mouseleave', () => {
    document.querySelector('.content-right img:first-child').style.opacity = 1;
});