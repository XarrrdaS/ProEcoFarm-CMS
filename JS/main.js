function validateForm(){document.getElementById("status").innerHTML="Sending...",formData={name:$("input[name=name]").val(),email:$("input[name=email]").val(),subject:$("input[name=subject]").val(),message:$("textarea[name=message]").val()},$.ajax({url:"mail.php",type:"POST",data:formData,success:function(e){$("#status").text(e.message),e.code&&$("#contact-form").closest("form").find("input[type=text], textarea").val("")},error:function(e){$("#status").text(e)}})}var acc=document.getElementsByClassName("accordion"),i;for(i=0;i<acc.length;i++)acc[i].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"});