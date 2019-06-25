// JavaScript30 viewer
$("#js30").click(function(){
    $("#js30-details").css("display","block");
});
// Practical JS viewer
$("#pjs").click(function(){
    $("#pjs-details").css("display","block");
});
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
    $("#js30-details").css("display","none");
    $("#pjs-details").css("display","none");
    $("#vapours-details").css("display","none");
    $("#einvoice-details").css("display","none");
    $("#mic-details").css("display","none");
});
