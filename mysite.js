
Handlebars.registerHelper('formatDate', function (date, format) {
    var mmnt = moment(date);
    return mmnt.format(format);
});


$().ready(function () {
         $.getJSON("https://public-api.wordpress.com/rest/v1.1/sites/cimigreen.wordpress.com/posts?number=4", function(result) {   
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var html = template(result);
        $(".post").html(html);
         $(".post .blog-content img").addClass("col-md-3 text-left");
          $(".post .blog-content img p").addClass("col-offset-2 col-md-7 text-right");
    });
    });

// function add_class_after_img() {
// 	var was_img_found = false;
// 	$("#blogpost p").each(function() {
// 		if (!was_img_found) {
// 			was_img_found = ($(this).find("img").length > 0);
// 			return;
// 		}
// 		$(this).addClass("col-offset-2 col-md-7 text-right");
// 	})
// }
// add_class_after_img();

$().ready(function add_class_after_img() {
	var was_img_found = false;
	$("#blogpost p").each(function() {
		if (!was_img_found) {
			if ($(this).find("img").length > 0) {
				was_img_found = true;
			}
			return;
		}
		if (was_img_found) {
			$(this).addClass("col-offset-2 col-md-7 text-right");
		}
	});
});