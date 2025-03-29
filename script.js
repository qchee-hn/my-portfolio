document.addEventListener("DOMContentLoaded", function() {
    var swipe = new Swipe(document.getElementById('swipe'), {
        startSlide: 0,
        auto: 0,
        continuous: true,
        disableScroll: false,
        stopPropagation: true
    });

    // Event when the "Select" button is clicked
    document.getElementById('accept').addEventListener('click', function() {
        alert('University/Project has been selected!');
        swipe.next(); // Swipe to the next card
    });

    // Event when the "Reject" button is clicked
    document.getElementById('reject').addEventListener('click', function() {
        alert('University/Project has been rejected!');
        swipe.next(); // Swipe to the next card
    });
});
