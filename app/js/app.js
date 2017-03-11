 $('.collapse').collapse();
    $(".burgerMenu").on("click", function () {
        $("#collapseablemenu").toggle();
    });

var $myGroup = $('#menu');
$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
});