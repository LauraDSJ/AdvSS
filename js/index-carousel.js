//carousel time to move
$('#myCarousel').carousel({
    interval: 5000
});

$('#prev-slide').on('click', function () {
   $("#myCarousel").carousel('prev');
});

$('#next-slide').on('click', function () {
   $("#myCarousel").carousel('next');
});

//Click Out Approack first block for first info slide
$('#slide-button-0').on('click', function () {
    "use strict";
    
    $('#myCarousel').carousel(0);
    
    $(this).removeClass("closed-approach").addClass("opened-approach");
    
    $("#slide-button-1").removeClass("opened-approach").addClass("closed-approach");
    $("#slide-button-2").removeClass("opened-approach").addClass("closed-approach");
    $("#slide-button-3").removeClass("opened-approach").addClass("closed-approach");
});

$('#slide-button-1').on('click', function () {
    "use strict";
    
    $('#myCarousel').carousel(1);
    
    $(this).removeClass("closed-approach").addClass("opened-approach");
    
    $("#slide-button-0").removeClass("opened-approach").addClass("closed-approach");
    $("#slide-button-2").removeClass("opened-approach").addClass("closed-approach");
    $("#slide-button-3").removeClass("opened-approach").addClass("closed-approach");
});

$('#slide-button-2').on('click', function () {
    "use strict";
    
    $('#myCarousel').carousel(2);
    
    $(this).removeClass("closed-approach").addClass("opened-approach");
    
    $("#slide-button-0").removeClass("opened-approach").addClass("closed-approach");
    $("#slide-button-1").removeClass("opened-approach").addClass("closed-approach");
    $("#slide-button-3").removeClass("opened-approach").addClass("closed-approach");
});

$('#slide-button-3').on('click', function () {
    "use strict";
    
    $('#myCarousel').carousel(3);
    
    $(this).removeClass("closed-approach").addClass("opened-approach");
    
    $("#slide-button-0").removeClass("opened-approach").addClass("closed-approach");
    $("#slide-button-2").removeClass("opened-approach").addClass("closed-approach");
    $("#slide-button-1").removeClass("opened-approach").addClass("closed-approach");
});

// When the carousel slides, auto update the text
$('#myCarousel').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
  
    switch (id) {
        case 0:
            $("#slide-button-0").removeClass("closed-approach").addClass("opened-approach");
    
            $("#slide-button-1").removeClass("opened-approach").addClass("closed-approach");
            $("#slide-button-2").removeClass("opened-approach").addClass("closed-approach");
            $("#slide-button-3").removeClass("opened-approach").addClass("closed-approach");
        break;
            
        case 1:
            $("#slide-button-1").removeClass("closed-approach").addClass("opened-approach");
    
            $("#slide-button-0").removeClass("opened-approach").addClass("closed-approach");
            $("#slide-button-2").removeClass("opened-approach").addClass("closed-approach");
            $("#slide-button-3").removeClass("opened-approach").addClass("closed-approach");
        break;
            
        case 2:
            $("#slide-button-2").removeClass("closed-approach").addClass("opened-approach");
    
            $("#slide-button-1").removeClass("opened-approach").addClass("closed-approach");
            $("#slide-button-0").removeClass("opened-approach").addClass("closed-approach");
            $("#slide-button-3").removeClass("opened-approach").addClass("closed-approach");
        break;
            
        case 3:
            $("#slide-button-3").removeClass("closed-approach").addClass("opened-approach");
    
            $("#slide-button-1").removeClass("opened-approach").addClass("closed-approach");
            $("#slide-button-2").removeClass("opened-approach").addClass("closed-approach");
            $("#slide-button-0").removeClass("opened-approach").addClass("closed-approach");
        break;
    }
});
