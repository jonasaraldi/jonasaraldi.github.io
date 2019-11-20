(function(doc, $) {

    $('.navbar-nav a').on('click', function(ev) {
        ev.preventDefault();

        var href = $(this).attr("href")
        var id = href.substring(1);

        doc.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }); 

})(document, jQuery);