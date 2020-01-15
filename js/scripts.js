$(document).ready(function() {
  $("button#addCow").click(function(){
    $("ul#cowPen").prepend("<img src='img/cow.png'>")
  })

  $("button#minusCow").click(function() {
    $("ul#cowPen").children("img").first().remove();
  })
})