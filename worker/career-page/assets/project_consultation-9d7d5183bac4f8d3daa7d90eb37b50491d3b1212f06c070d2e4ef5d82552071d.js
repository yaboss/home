function isEmail(e){var t=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;return t.test(e)}$("#new_consultation_form").submit(function(e){var t=$(":input[id=consultation_form_from_page]").val(),r=$(":input[id=consultation_form_email]").val();return"Service - Fixed Bid Consultation"==t?text_button="Contact for Consultation":text_button="Scale Up Your Team",e.preventDefault(),e.stopImmediatePropagation(),$(".submit_message3").attr("disabled",!0).attr("value","Sending Your Enquiry..."),$.ajax({url:$(this).attr("action"),type:$(this).attr("method"),data:$(this).serialize(),success:function(e){return $success_container3=$("#success_explanation3"),$error_container3=$("#error_explanation3"),$error_container_ul3=$("ul",$error_container3),$submit_button3=$(".submit_message3"),$success_container3.find("span").remove(),isEmail(r)?($("<span>").html(e.meta.error[0]).appendTo($success_container3),$success_container3.is(":hidden")&&$success_container3.show()):($("<span>").html(e.meta.error[0]).appendTo($error_container3),$error_container3.is(":hidden")&&$error_container3.show()),$submit_button3.removeAttr("disabled").attr("value",text_button),grecaptcha.reset(widgetId1),$("li",$error_container_ul3).length?($("li",$error_container_ul3).remove(),$error_container3.hide()):void 0},error:function(e){$success_container3=$("#success_explanation3"),$error_container3=$("#error_explanation3"),$error_container_ul3=$("ul",$error_container3),$submit_button3=$(".submit_message3"),$success_container3.empty(),$success_container3.hide(),$error_container_ul3.empty(),$error_container3.is(":hidden")&&$error_container3.show(),$submit_button3.removeAttr("disabled").attr("value",text_button),grecaptcha.reset(widgetId1),$.each(e.responseJSON,function(e,t){return $("<li>").html(t).appendTo($error_container_ul3)}),setTimeout(function(){$("#error_explanation3.alert.alert-danger").hide()},8e3)}}).done(function(){isEmail(r)?setTimeout(function(){$("#new_consultation_form")[0].reset(),$("#success_explanation3.alert.alert-success").hide()},5e3):setTimeout(function(){$("#error_explanation3.alert.alert-danger").hide()},5e3)}),!1});