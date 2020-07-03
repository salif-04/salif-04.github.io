// Vapours viewer
$("#vapours").click(function(){
    $("#vapours-details").css("display","block");
});
// E-Invoice JS viewer
$("#einvoice").click(function(){
    $("#einvoice-details").css("display","block");
});
// MIC viewer
$("#mic").click(function(){
    $("#mic-details").css("display","block");
});

$(".close").click(function(){
    $("#vapours-details").css("display","none");
    $("#einvoice-details").css("display","none");
    $("#mic-details").css("display","none");
});
