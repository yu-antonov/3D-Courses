document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#burger__list').classList.add('active');

        document.querySelector('.burger__btn').addEventListener('click', function() {
            document.querySelector('#burger__list').classList.remove('active');
        });
    });
})