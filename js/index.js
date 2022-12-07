$(function(){
  $("#click-for-long").click(function(){
    $("#long-version").removeClass("invisible");
    $("#tldr").addClass("invisible");
    $("#horizontal-spacer").addClass("invisible");
  });

  $("#click-for-tldr").click(function(){
    $("#tldr").removeClass("invisible");
    $("#long-version").addClass("invisible");
    $("#horizontal-spacer").addClass("invisible");
  });
});