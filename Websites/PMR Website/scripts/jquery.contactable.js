/*
 * contactable 1.2.1 - jQuery Ajax contact form
 *
 * Copyright (c) 2009 Philip Beel (http://www.theodin.co.uk/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Revision: $Id: jquery.contactable.js 2010-01-18 $
 *
 */
(function(a){a.fn.contactable=function(d){var b={name:"Name",email:"Email",message:"Message",subject:"A contactable message",recievedMsg:"Thank you for your message. We will Process your message as soon as possible.",notRecievedMsg:"Sorry but your message could not be sent, try again later.",disclaimer:"Please feel free to contact us if you have any questions.",hideOnSubmit:true};d=a.extend(b,d);return this.each(function(){a(this).html('<div id="contactable"></div><form id="contactForm" method="" action=""><div id="loading"></div><div id="callback"></div><div class="holder"><p><label for="name">Name <span class="red"> * </span></label><br /><input id="name" class="contact" name="name" /></p><p><label for="email">E-Mail <span class="red"> * </span></label><br /><input id="email" class="contact" name="email" /></p><p><label for="comment">Your Message <span class="red"> * </span></label><br /><textarea id="comment" name="comment" class="comment" rows="4" cols="30" ></textarea></p><p><input class="submit" type="submit" value="Send"/></p><p class="disclaimer">'+ b.disclaimer+"</p></div></form>");a("div#contactable").toggle(function(){a("#overlay").css({display:"block"});a(this).animate({marginLeft:"-=5px"},"fast");a("#contactForm").animate({marginLeft:"-=0px"},"fast");a(this).animate({marginLeft:"+=387px"},"slow");a("#contactForm").animate({marginLeft:"+=390px"},"slow")},function(){a("#contactForm").animate({marginLeft:"-=390px"},"slow");a(this).animate({marginLeft:"-=387px"},"slow").animate({marginLeft:"+=5px"},"fast");a("#overlay").css({display:"none"})}); a("#contactForm").validate({rules:{name:{required:true,minlength:2},email:{required:true,email:true},comment:{required:true}},messages:{name:"",email:"",comment:""},submitHandler:function(){a(".holder").hide();a("#loading").show();var c=document.getElementById("slider_form").src;c=c.replace("jquery.contactable.js","");c+="mail.php";a.post(c,{subject:b.subject,name:a("#name").val(),email:a("#email").val(),comment:a("#comment").val()},function(e){a("#loading").css({display:"none"});if(e=="success"){a("#callback").show().append(b.recievedMsg); if(b.hideOnSubmit==true){a("#contactForm").animate({dummy:1},2E3).animate({marginLeft:"-=450px"},"slow");a("div#contactable").animate({dummy:1},2E3).animate({marginLeft:"-=520px"},"slow").animate({marginLeft:"+=5px"},"fast");a("#overlay").css({display:"none"})}}else a("#callback").show().append(b.notRecievedMsg)})}})})}})(jQuery);