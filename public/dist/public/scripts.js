$(document).ready(() => {
    $('app-new-movie').hide();
    $('app-view-movie').hide();
    $('app-new-review').hide();

    $('#new-movie').click((e) => {
        $('app-new-movie').slideToggle();
        $('#close-new-movie').click((e) => {
            $('app-new-movie').slideToggle();
            $('#refresh').click();
        });
        $('#submit').click((e) => {
            $('app-new-movie').slideToggle();
            $('#refresh').click();
        })
    })
});
;
//# sourceMappingURL=scripts.js.map