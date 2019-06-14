// MIC viewer
$("#js30").click(function(){
    $("#js30-details").css("display","block");
});
$("#pjs").click(function(){
    $("#pjs-details").css("display","block");
});
$("#vapours").click(function(){
    $("#vapours-details").css("display","block");
});

$(".close").click(function(){
    $("#js30-details").css("display","none");
    $("#pjs-details").css("display","none");
    $("#vapours-details").css("display","none");
});
