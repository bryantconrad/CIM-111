$(document).ready(function() {

    $(".desc").hide();

    //if/else statement and functions (show/hide events)

    var hideStatus = true;

    $("#showbtn").click(function(){
        if(hideStatus == true){
            $(".desc").slideDown(300);
            hideStatus = false;
            $("#showbtn").html("Hide all");
        }
        else{
            $(".desc").slideUp(300);
            hideStatus = true;
            $("#showbtn").html("Show all");
        }
    });

    //for loop, basically used as a complicated way to show/hide here because I couldn't think of a better way to use a for loop

    var i;
    var guitars = ["Gibson", "Fender", "Ibanez", "Les Paul", "Yamaha"];
    var text = "";
    brandArray = false;

    $("#brands").click(function(){
        if(brandArray == false){
            for (i = 0; i < guitars.length; i++) {
                text += guitars[i] + "<br>";
            };
            $("#guitars").html(text);
            $("#brands").html("Hide brands");
            brandArray = true;
            
        }
        else{
            text = "";
            $("#guitars").html(text);
            $("#brands").html("Show brands");
            brandArray = false;
        }
    });


    //list sliding (show/hide events)

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

});