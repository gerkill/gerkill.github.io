
let lastShown;
$('#list').on('click', 'li', function() {
    let index = $(this).index();

    if (lastShown)
        lastShown.hide();

    lastShown = $('.figures img:eq(' + index + ')')

    lastShown.show()

    lastShown = $('.figures figure:eq(' + index + ')')

    lastShown.show();
});







