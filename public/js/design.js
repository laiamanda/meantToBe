var classes = [
    'Biologist',
    'Chemist',
    'Engineering',
    'Programmer'
];

(function displayClass(i) {
    $('#transform h1').text(classes[i]).fadeIn(1000, function() {
        $(this).delay(600).fadeOut(1000, function() {
            displayClass((i + 1) % classes.length);
        });
    });
})(0);