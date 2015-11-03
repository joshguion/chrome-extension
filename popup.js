
$(document).ready(function () {
 page.init();
});

var page = {
  init: function() {
   page.initEvents ();
   page.initStyling ();
  },
  initEvents: function (){},
  initStyling: function (){

    $.ajax({
              url: "https://www.reddit.com/r/cats.json",
              method: 'GET',
              success: function (data) {
                var redditArr = data.data.children;
                for (var i = 0; i < redditArr.length; i++) {
                  $('body').append('<h3>'+ redditArr[i].data.title
                  + '</h3>' + '<img src="' + redditArr[i].data.preview.images[0].source.url + '">');

                }
              }
    });
  }
}
