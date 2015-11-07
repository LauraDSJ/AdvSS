/*jslint browser: true*/
/*global $, jQuery, alert*/

//Get the height of the device to give the same height to divs that contain the class "fill"
function deviceHeight() {
    "use strict";
    
    var devHeight = $(window).height();
    $(".fill").css("height", devHeight);
}

function engagementModelsDescriptions() {
    "use strict";
    
    $("#nearshore-text").hide();
    $("#offshore-text").hide();
    $("#vc-text").hide();
    
    $("#onshore-btn").click(function () {
        if ($("#nearshore-text").is(":visible") || $("#offshore-text").is(":visible") || $("#vc-text").is(":visible")) {
            //$("#nearshore-text").slideToggle("slow");
        }else{
            $("#onshore-text").slideToggle("slow", function () {
                if($("#onshore-text").is(":visible")){
                    $("#onshore-btn").addClass("out-selected");
                }else{
                    $("#onshore-btn").removeClass("out-selected");
                }
            });
        }
    });//Onshore button
    
    $("#nearshore-btn").click(function () {
        if ($("#onshore-text").is(":visible") || $("#offshore-text").is(":visible") || $("#vc-text").is(":visible")) {
            });
           // $("#onshore-text").slideToggle("slow", function () {
        //        $("#nearshore-text").slideToggle("slow");
        //    }
        }else{
            $("#nearshore-text").slideToggle("slow", function () {
                if($("#nearshore-text").is(":visible")){
                    $("#nearshore-btn").addClass("out-selected");
                }else{
                    $("#nearshore-btn").removeClass("out-selected");
                }
            });
        }
    });//Onshore button
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

$(document).ready(function () {
    "use strict";

    deviceHeight();
    caseStudiesExtraInfo();
    engagementModelsDescriptions();
});

$(window).resize(function () {
    "use strict";

    deviceHeight();
});
