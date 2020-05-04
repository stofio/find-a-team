$('#go-signin').on('click', () => {
    $('#welcome').hide(0);
    $('#sign-in').fadeIn();
});
$('#go-signup').on('click', () => {
    $('#welcome').hide(0);
    $('#sign-up').fadeIn();
});
$('.go-back').on('click', () => {
    $('#sign-up').hide(0);
    $('#sign-in').hide(0);
    $('#welcome').fadeIn();
})