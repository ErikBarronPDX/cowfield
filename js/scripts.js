$(document).ready(function() {
  $("button#addCow").click(function(){
    $("ul#cowPen").prepend("<img src='img/cow.png'>")
  })
})