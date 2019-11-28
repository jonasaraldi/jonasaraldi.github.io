(function(win, doc, $) {

    $(doc).ready(init);

    function init() {
        calculateBodyPaddingTop();

        $(win).on('resize', calculateBodyPaddingTop);

        $('.navbar-nav a').on('click', function(ev) {
            ev.preventDefault();
    
            var href = $(this).attr("href")
            var id = href.substring(1);
    
            doc.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            });
        }); 
    }

    function calculateBodyPaddingTop() {
        var heightStartSection = $('.section#about')[0].offsetHeight;
        $('body').css('padding-top', heightStartSection + 'px');
    }

})(window, document, jQuery);