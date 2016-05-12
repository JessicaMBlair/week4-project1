$(document).ready(function(){
  
    $("div").click(function(){
        $(".hideMe").hide();
    });
  
  	$(".changeColor").click(function(){
        $("li:nth-child(3)").css("color", "#8A2BE2");
    });
	
	$("ul li:nth-child(4)").click(function(){
        $("ul li:nth-child(4)").append($("<li>BLLALALA</li>").clone(false));
    });
	
  	$("#removeLi").click(function(){
        $("ul li:nth-child(2)").remove();
    });
	
	$("ul li:last").click(function(){
        $("ul li:last").css('font-size', '40px');
		$("ul li:nth-child(1)").hide();
		$("ul li:nth-child(2)").hide();
		$("ul li:nth-child(3)").hide();
		$("ul li:nth-child(4)").hide();
    });
	
   	$(".cute").click(function() {
        $(".cute").clone(true).insertAfter(".cute");
   });
	
	$("body").dblclick(function(){
        $("#makeSquare").css({'border-radius': '0', 'height': '100px', 'width' :'100px'});
    });
	
	$("#dontClick").click(function(){
        alert('I said don\'t click this button!');
    });
	
	$(".black").click(function(){
        $("body").addClass('black');
    });
	
	$(".wood").click(function(){
        $("body").addClass('wood');
    });
	
	$(".chaos").click(function(){
        $("body").addClass('chaos');
    });
	
	$(".restore").click(function(){
        $("body").removeClass('wood, black, chaos');
    });
	
	$("#hover").mouseover(function(){
        $("#hover").css('background-color', 'red');
    });
	
	$("#hover").click(function(){
        $("#hover").toggleClass('green');
    });
	
});
