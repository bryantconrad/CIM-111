$(document).ready(function() {

    $(".desc").hide();

    $(".item1").on({
        click: function(){
            $(".desc1").slideToggle(300);
        },
        mouseenter: function(){
            $(".item1").css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(".item1").css("background-color", "white");
        }
    });

    $(".item2").on({
        click: function(){
            $(".desc2").slideToggle(300);
        },
        mouseenter: function(){
            $(".item2").css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(".item2").css("background-color", "white");
        }
    });

    $(".item3").on({
        click: function(){
            $(".desc3").slideToggle(300);
        },
        mouseenter: function(){
            $(".item3").css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(".item3").css("background-color", "white");
        }
    });

    $(".item4").on({
        click: function(){
            $(".desc4").slideToggle(300);
        },
        mouseenter: function(){
            $(".item4").css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(".item4").css("background-color", "white");
        }
    });

    $(".item5").on({
        click: function(){
            $(".desc5").slideToggle(300);
        },
        mouseenter: function(){
            $(".item5").css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(".item5").css("background-color", "white");
        }
    });



    /*
    $(".item1").click(function() {
        if(hideStatus == true){
            $(".body1").hide(300);
            hideStatus = false;
        }
        else{
            $(".body1").show(300);
            hideStatus = true;
        }
    });

    $(".item2").click(function() {
        if(hideStatus == true){
            $(".body2").hide(300);
            hideStatus = false;
        }
        else{
            $(".body2").show(300);
            hideStatus = true;
        }
    });
    */

});