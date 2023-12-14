let  send_message_submit=document.querySelector("#send_message_submit");
send_message_submit.addEventListener("click",function(){

    let  send_message_name=document.querySelector("#send_message_name").value.trim();
    let  send_message_email=document.querySelector("#send_message_email").value.trim();
    let  send_message_subject=document.querySelector("#send_message_subject").value.trim();
    let  send_message_message=document.querySelector("#send_message_message").value.trim();
   
    

    $.ajax({
        url:"php/send_message.php",
        type:"POST",
        data:{send_message_name:send_message_name,send_message_email:send_message_email,send_message_subject:send_message_subject,send_message_message:send_message_message},
        success:function(data){
            if(data==1){
                console.log("success");
            }
            else{
                console.log("Fail");
            }
        }
    })


});

