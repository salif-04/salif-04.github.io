$("#submitEmail").click(function(e){
    e.preventDefault();
    const data = {
        from_name: $('#forName').val(),
        from_email: $('#forEmail').val(),
        subject: $('#forSubject').val(),
        message_html: $('#forMessage').val(),
        address: $('#forAddress').val(),
        phone: $('#forPhone').val()
    };

    if (!(data.from_name && data.from_email && data.subject && data.message_html && data.address && data.phone)) {
        $('#submit-data-header').text("Incomplete Form");
        $('#submit-data').text("Please Fill the Complete Form");
        $("#submit-details").css("display","block");
    }

    console.log(data);
});

$(".close").click(function(){
    $("#submit-details").css("display","none");
});