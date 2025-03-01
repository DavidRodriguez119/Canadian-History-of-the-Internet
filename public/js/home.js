//Event listener for see-more-buttons
const seeMoreButtons = document.querySelectorAll('.see-more-button');
seeMoreButtons.forEach(button => {
    button.addEventListener(`click`, async () => {
        //identify which button was clicked
        const id = button.dataset.periodId;
        //redirect to the respective period page
        window.location.href = `/period-page/${id}`;
    });
});