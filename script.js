// The function
var background_image_parallax = function($object, multiplier){
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
      multiplier = 1 - multiplier;
    var $doc = $(document);
    $object.css({"background-attatchment" : "fixed"});
      $(window).scroll(function(){
        var from_top = $doc.scrollTop(),
            bg_css = '0px ' +(multiplier * from_top) + 'px';
        $object.css({"background-position" : bg_css });
    });
  };
  
  //Just pass the jQuery object
  background_image_parallax($(".box2"));
  
  //optional second value for speed
  background_image_parallax($(".box3"), 0.25);