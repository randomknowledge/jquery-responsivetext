$(document).ready(function () {
    $.responsiveText('start', {
        selector: '.responsive-text',
        sizes: {
            'ipad': [1024, 481],
            'iphone': [480, 320],
            'bigscreen': [Number.POSITIVE_INFINITY, 1280]
        },
        delay: 100
    });

    $('.stop').click(function () {
        $.responsiveText('stop');
    });
});
