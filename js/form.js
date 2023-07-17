const form = document.querySelector('.modal-form');

form.addEventListener('submit', event => {
    event.preventDefault();

    console.log('event.target.name': event.target.name);
})