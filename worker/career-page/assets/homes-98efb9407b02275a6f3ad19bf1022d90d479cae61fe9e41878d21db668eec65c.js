$(".slideshow").unslider({autoplay:!0}),$(".slideshow2").unslider({autoplay:!0}),setInterval(function(){$("#ticker2 div").each(function(){$(this).animate({top:"-=10px"},50,function(){var t=parseInt($(this).css("top").replace("px",""))+parseInt($(this).css("height").replace("px",""));if(0>t){var e=$(this).clone(),i=$(this).parent();e.css("top","550px"),$(this).remove(),i.append(e)}})})},40),$(document).ready(function(){$("#bgndVideo").YTPlayer(),"/contact_us"===window.location.pathname&&$("#nav-icon2").trigger("click")});