/*jslint browser: true*/
/*global $, jQuery, alert*/

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

//Get the height of the device to give the same height to divs that contain the class "fill"
function deviceHeight() {
    "use strict";
    
    var devHeight = $(window).height();
    $(".fill").css("height", devHeight);
}

//Navbar fade in background when scroll


//Display maps, America displays by default
function displayMaps() {
    "use strict";
    
    //Hide Europe and Asia map
    $("#europe-map").hide();
    $("#asia-map").hide();
    
    //Click America 
    $("#america-map-btn").click(function () {
        
        if ($("#america-map").is(":visible")) {   
        } else {
            //Remove the class for the selected state to Europe and(or) Asia button(s) and give it unselected state  
            $("#europe-map-btn").removeClass("engagement-model-btn-selected").addClass("engagement-model-btn");
            $("#asia-map-btn").removeClass("engagement-model-btn-selected").addClass("engagement-model-btn");

            //give America button the selected state
            $("#america-map-btn").removeClass("engagement-model-btn").addClass("engagement-model-btn-selected");

            //Hide Europe and Asia maps and display America
            $("#europe-map").hide();
            $("#asia-map").hide();
            $("#america-map").fadeIn("slow");
        }
    });
    
    //Click Europe
    $("#europe-map-btn").click(function () {
        
        if ($("#europe-map").is(":visible")) {
            
        } else {
            //Remove the class for the selected state to America and(or) Asia button(s) and give it unselected state  
            $("#america-map-btn").removeClass("engagement-model-btn-selected").addClass("engagement-model-btn");
            $("#asia-map-btn").removeClass("engagement-model-btn-selected").addClass("engagement-model-btn");

            //give Europe button the selected state
            $("#europe-map-btn").removeClass("engagement-model-btn").addClass("engagement-model-btn-selected");

            //Hide America and Asia maps and display Europe
            $("#america-map").hide();
            $("#asia-map").hide();
            $("#europe-map").fadeIn("slow");
        }
    });
    
    //Click Asia
    $("#asia-map-btn").click(function () {
        
        if ($("#asia-map").is(":visible")) {
            
        } else {
            //Remove the class for the selected state to America and(or) Europe button(s) and give it unselected state  
            $("#america-map-btn").removeClass("engagement-model-btn-selected").addClass("engagement-model-btn");
            $("#europe-map-btn").removeClass("engagement-model-btn-selected").addClass("engagement-model-btn");

            //give Asia button the selected state
            $("#asia-map-btn").removeClass("engagement-model-btn").addClass("engagement-model-btn-selected");

            //Hide America and Europe maps and display Asia
            $("#america-map").hide();
            $("#europe-map").hide();
            $("#asia-map").fadeIn("slow");
        }
    });
}

//Display description of the Outsourcings, Onshore displays by default 
function engagementModelsDescriptions() {
    "use strict";
    
    //Hide the Nearshore, Offshore and Virtual Active information by default
    $("#nearshore-text").hide();
    $("#offshore-text").hide();
    $("#vc-text").hide();
    
    //Behavior of Onshore button
    $("#onshore-btn").click(function () {
        //If any of the other outsources is being displayed
        if ($("#nearshore-text").is(":visible") || $("#offshore-text").is(":visible") || $("#vc-text").is(":visible")) {
            //Hide the other sections
            $("#nearshore-text").hide();
            $("#offshore-text").hide();
            $("#vc-text").hide();
            
            //Remove the selected class from the ther section's button
            $("#nearshore-btn").removeClass("out-selected");
            $("#offshore-btn").removeClass("out-selected");
            $("#vc-btn").removeClass("out-selected");
            
            //Open the Selection
            $("#onshore-text").slideToggle("slow");
            $("#onshore-btn").addClass("out-selected");
        } else {
            $("#onshore-text").slideToggle("slow", function () {
                if ($("#onshore-text").is(":visible")) {
                    $("#onshore-btn").addClass("out-selected");
                } else {
                    $("#onshore-btn").removeClass("out-selected");
                }
            });
        }
    });//Onshore button
    
    //Behavior of Nearshore button
    $("#nearshore-btn").click(function () {
        //If any of the other outsources is being displayed
        if ($("#onshore-text").is(":visible") || $("#offshore-text").is(":visible") || $("#vc-text").is(":visible")) {
           //Hide the other sections
            $("#onshore-text").hide();
            $("#offshore-text").hide();
            $("#vc-text").hide();
            
            //Remove the selected class from the ther section's button
            $("#onshore-btn").removeClass("out-selected");
            $("#offshore-btn").removeClass("out-selected");
            $("#vc-btn").removeClass("out-selected");
            
            //Open the Selection
            $("#nearshore-text").slideToggle("slow");
            $("#nearshore-btn").addClass("out-selected");
        } else {
            $("#nearshore-text").slideToggle("slow", function () {
                if ($("#nearshore-text").is(":visible")) {
                    $("#nearshore-btn").addClass("out-selected");
                } else {
                    $("#nearshore-btn").removeClass("out-selected");
                }
            });
        }
    });//Nearshore button
    
    //Behavior of Offshore button
    $("#offshore-btn").click(function () {
        //If any of the other outsources is being displayed
        if ($("#onshore-text").is(":visible") || $("#nearshore-text").is(":visible") || $("#vc-text").is(":visible")) {
           //Hide the other sections
            $("#onshore-text").hide();
            $("#nearshore-text").hide();
            $("#vc-text").hide();
            
            //Remove the selected class from the ther section's button
            $("#onshore-btn").removeClass("out-selected");
            $("#nearshore-btn").removeClass("out-selected");
            $("#vc-btn").removeClass("out-selected");
            
            //Open the Selection
            $("#offshore-text").slideToggle("slow");
            $("#offshore-btn").addClass("out-selected");
        } else {
            $("#offshore-text").slideToggle("slow", function () {
                if ($("#offshore-text").is(":visible")) {
                    $("#offshore-btn").addClass("out-selected");
                } else {
                    $("#offshore-btn").removeClass("out-selected");
                }
            });
        }
    });//Offshore button
    
    //Behavior of Virtual Captive button
    $("#vc-btn").click(function () {
        //If any of the other outsources is being displayed
        if ($("#onshore-text").is(":visible") || $("#nearshore-text").is(":visible") || $("#offshore-text").is(":visible")) {
           //Hide the other sections
            $("#nearshore-text").hide();
            $("#offshore-text").hide();
            $("#onshore-text").hide();
            
            //Remove the selected class from the ther section's button
            $("#nearshore-btn").removeClass("out-selected");
            $("#offshore-btn").removeClass("out-selected");
            $("#onshore-btn").removeClass("out-selected");
            
            //Open the Selection
            $("#vc-text").slideToggle("slow");
            $("#vc-btn").addClass("out-selected");
        } else {
            $("#vc-text").slideToggle("slow", function () {
                if ($("#vc-text").is(":visible")) {
                    $("#vc-btn").addClass("out-selected");
                } else {
                    $("#vc-btn").removeClass("out-selected");
                }
            });
        }
    });//Virtual Captive button
}

//Functionality of Case Studies extra information buttons
function caseStudiesExtraInfo() {
    "use strict";
    
    // -------------------- Alliance United Extra Info toggles
    //Hide both divs
    $("#peak-mkt-project").hide();
    $("#peak-mkt-result").hide();
    
    //Click the "Project" button
    $("#peak-mkt-project-btn").click(function () {
        
        //If the "Results" toggle is open, close it and show the "Project" div
        if ($("#peak-mkt-result").is(":visible")) {
            //Return the "Results button to normal state
            $("#peak-mkt-result-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
            //Toggle the Div to hide
            $("#peak-mkt-result").slideToggle("slow", function () {
                //Open toggle the "Project" div
                $("#peak-mkt-project").slideToggle("slow");
                //"Project" button to selected state
                $("#peak-mkt-project-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected"); 
            });
        //If "Results" div is NOT opened
        } else {
            //Open the "Project div"
            $("#peak-mkt-project").slideToggle("slow", function () {
                //If visible, change "Project" button to selected, if not visible, button back to normal 
                if ($("#peak-mkt-project").is(":visible")) {
                    $("#peak-mkt-project-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected");
                } else {
                    $("#peak-mkt-project-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
                }
            });
        }//else finishes
    });//Peak MKT Project Button
    
    //Click the "Result" button
    $("#peak-mkt-result-btn").click(function () {
        
        //If the "Project" toggle is open, close it and show the "Project" div
        if ($("#peak-mkt-project").is(":visible")) {
            //Return the "Project" button to normal state
            $("#peak-mkt-project-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
            //Toggle the Div to hide
            $("#peak-mkt-project").slideToggle("slow", function () {
                //Open toggle the "Result" div
                $("#peak-mkt-result").slideToggle("slow");
                //"Result" button to selected state
                $("#peak-mkt-result-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected"); 
            });
        //If "Project" div is NOT opened
        } else {
            //Open the "Result" div
            $("#peak-mkt-result").slideToggle("slow", function () {
                //If visible, change "Result" button to selected, if not visible, button back to normal 
                if ($("#peak-mkt-result").is(":visible")) {
                    $("#peak-mkt-result-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected");
                } else {
                    $("#peak-mkt-result-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
                }
            });
        }//else finishes
    });//Peak MKT Result Button
    
    // -------------------- Alliance United Extra Info toggles
    //Hide both divs
    $("#au-project").hide();
    $("#au-result").hide();
    
    //Click the "Project" button
    $("#au-project-btn").click(function () {
        
        //If the "Results" toggle is open, close it and show the "Project" div
        if ($("#au-result").is(":visible")) {
            //Return the "Results button to normal state
            $("#au-result-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
            //Toggle the Div to hide
            $("#au-result").slideToggle("slow", function () {
                //Open toggle the "Project" div
                $("#au-project").slideToggle("slow");
                //"Project" button to selected state
                $("#au-project-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected"); 
            });
        //If "Results" div is NOT opened
        } else {
            //Open the "Project div"
            $("#au-project").slideToggle("slow", function () {
                //If visible, change "Project" button to selected, if not visible, button back to normal 
                if ($("#au-project").is(":visible")) {
                    $("#au-project-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected");
                } else {
                    $("#au-project-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
                }
            });
        }//else finishes
    });//Top Finance Project Button
    
    //Click the "Result" button
    $("#au-result-btn").click(function () {
        
        //If the "Project" toggle is open, close it and show the "Project" div
        if ($("#au-project").is(":visible")) {
            //Return the "Project" button to normal state
            $("#au-project-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
            //Toggle the Div to hide
            $("#au-project").slideToggle("slow", function () {
                //Open toggle the "Result" div
                $("#au-result").slideToggle("slow");
                //"Result" button to selected state
                $("#au-result-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected"); 
            });
        //If "Project" div is NOT opened
        } else {
            //Open the "Result" div
            $("#au-result").slideToggle("slow", function () {
                //If visible, change "Result" button to selected, if not visible, button back to normal 
                if ($("#au-result").is(":visible")) {
                    $("#au-result-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected");
                } else {
                    $("#au-result-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
                }
            });
        }//else finishes
    });//AU Result Button
    
    // -------------------- Top Finance Extra Info toggles
    //Hide both divs
    $("#top-finance-project").hide();
    $("#top-finance-result").hide();
    
    //Click the "Project" button
    $("#top-finance-project-btn").click(function () {
        
        //If the "Results" toggle is open, close it and show the "Project" div
        if ($("#top-finance-result").is(":visible")) {
            //Return the "Results button to normal state
            $("#top-finance-result-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
            //Toggle the Div to hide
            $("#top-finance-result").slideToggle("slow", function () {
                //Open toggle the "Project" div
                $("#top-finance-project").slideToggle("slow");
                //"Project" button to selected state
                $("#top-finance-project-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected"); 
            });
        //If "Results" div is NOT opened
        } else {
            //Open the "Project div"
            $("#top-finance-project").slideToggle("slow", function () {
                //If visible, change "Project" button to selected, if not visible, button back to normal 
                if ($("#top-finance-project").is(":visible")) {
                    $("#top-finance-project-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected");
                } else {
                    $("#top-finance-project-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
                }
            });
        }//else finishes
    });//Top Finance Project Button
    
    //Click the "Result" button
    $("#top-finance-result-btn").click(function () {
        
        //If the "Project" toggle is open, close it and show the "Project" div
        if ($("#top-finance-project").is(":visible")) {
            //Return the "Project" button to normal state
            $("#top-finance-project-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
            //Toggle the Div to hide
            $("#top-finance-project").slideToggle("slow", function () {
                //Open toggle the "Result" div
                $("#top-finance-result").slideToggle("slow");
                //"Result" button to selected state
                $("#top-finance-result-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected"); 
            });
        //If "Project" div is NOT opened
        } else {
            //Open the "Result" div
            $("#top-finance-result").slideToggle("slow", function () {
                //If visible, change "Result" button to selected, if not visible, button back to normal 
                if ($("#top-finance-result").is(":visible")) {
                    $("#top-finance-result-btn").removeClass("case-studies-extra-info").addClass("case-studies-extra-info-selected");
                } else {
                    $("#top-finance-result-btn").removeClass("case-studies-extra-info-selected").addClass("case-studies-extra-info");
                }
            });
        }//else finishes
    });//Top Finance Result Button
    
}

//---------------------- Our Capabilities Section
$("#des-text").hide();
$("#qa-text").hide();
$("#sys-text").hide();
$("#proj-text").hide();

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $(".navbar-fixed-top").addClass("navbar-background", function () {
            $(this).fadeIn();
        });
        
    } else {
        $(".navbar-fixed-top").removeClass("navbar-background");
    }
});

$(document).ready(function () {
    "use strict";

    deviceHeight();
    caseStudiesExtraInfo();
    engagementModelsDescriptions();
    displayMaps();
});

$(window).resize(function () {
    "use strict";

    deviceHeight();
});
