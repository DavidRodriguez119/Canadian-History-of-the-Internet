//Event listener for sources-buttons
const sourcesButtons = document.querySelectorAll('.sources-button');
sourcesButtons.forEach(button => {
    button.addEventListener(`click`, async () => {
        //redirect to the respective period page
        window.location.href = `/sources-page`;
    });
});