
Handlebars.registerHelper('formatDate', function (date, format) {
    var mmnt = moment(date);
    return mmnt.format(format);
});


$().ready(function () {
         $.getJSON("https://public-api.wordpress.com/rest/v1.1/sites/cimigreen.wordpress.com/posts/", function(result) {   
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var html = template(result);
        $(".post").html(html);
        $(".post .blog-content img").addClass("col-md-3 text-left");
            $(".post p img:first-child + p").addClass("col-offset-2 col-md-7 text-right");
    });
    });

