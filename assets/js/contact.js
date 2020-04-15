const display = (headerData, bodyData) => {
    $('#submit-data-header').text(headerData);
    $('#submit-data').text(bodyData);
    $("#submit-details").css("display","block");
}

// Handles email sending
$("#submitEmail").click(function(e){
    e.preventDefault();

    const data = {
        from_name: $('#forName').val(),
        from_email: $('#forEmail').val(),
        subject: $('#forSubject').val(),
        message_html: $('#forMessage').val(),
        phone: $('#forPhone').val()
    };

    // Check for any unfilled input field
    if (!(data.from_name && data.from_email && data.subject && data.message_html && data.phone)) {
        display('Incomplete Form', 'Please Fill the Complete Form');
    }
    else {
        display('Sending Email', 'Please wait while we send the email.')
        $.ajax('https://api-emailjs.herokuapp.com/email', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
        }).done(function(responseData) {
            if (responseData.status === 200) { // email send successfully
                display('Email Sent', 'Your email was sent successfully.');
            }
            else { // error occured while sending email
                display('Error Occured', 'An error occured while sending the email. Kindly email to admin at syedsalifmoin@gmail.com');
            }
            
        }).fail(function() {
            display('Error Occured', 'Cannot send email Currently. Check your Internet Connection or try again later.');
        })
    }
    
    console.log(data);
});

$(".close").click(function(){
    $("#submit-details").css("display","none");
});