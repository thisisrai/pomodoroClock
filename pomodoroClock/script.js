$(document).ready(function(){
  var buzzer = $("#buzzer")[0];
  var count = parseInt($("#num").html());

  $("#add5Clock").click(function(){
    count += 1;
    if(count>60){
      $("#num").html("60:00");
      count = 60;
    }
    else {
      $("#num").html(count.toString()+":00");
    }
  });

  $("#minus5Clock").click(function(){
    count -= 1;
    if(count<0){
      $("#num").html("0:00");
      count = 0;
    }
    else {
      $("#num").html(count.toString()+":00");
    }
  });

   $("#reset").click(function(){
     count = 25;
     $("#num").html(count.toString()+":00");

  });

  $("#start").click(function(){
    var counter = setInterval(timer, 1000);
    count *= 60;
    if(count === 0){
      count = 25*60;
    }

    function timer(){
    $("#start, #minus5Clock, #add5Clock").hide();

      $("#reset").click(function(){
        clearInterval(counter);
        $("#start, #minus5Clock, #add5Clock, #reset").show();
        count = 25;
        $("#num").html(count.toString()+":00");
      });

      count -= 1;

      if(count===0){
        buzzer.play();
        clearInterval(counter);
        $("#num").html("00:00");
        $("#start, #minus5Clock, #add5Clock, #reset").show();
      }
      if(count%60>=10){
        $("#num").html(Math.floor(count/60)+":"+count%60);
      }
      else{
        $("#num").html(Math.floor(count/60)+":0"+count%60);
      }
    }
  });

});
