let rating = 0;
let values = document.querySelectorAll('ul li');
let submit = document.querySelector('button')
for (let i = 0; i < values.length; i++) {
    values[i].onclick = function() {
        for (let i = 0; i < values.length; i++) {
            values[i].classList.remove('active')
        }
        rating = this.textContent;
        this.classList.add('active');

    }
}
submit.onclick = function() {
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.report').style.display = 'block';
    document.querySelector('.rate').textContent = rating;
}