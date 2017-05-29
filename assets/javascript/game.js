
var goal = Math.floor((Math.random() * 120) + 19);

var lghtGreen = Math.floor((Math.random() * 12) + 1);
var drkGreen = Math.floor((Math.random() * 12) + 1);
var red = Math.floor((Math.random() * 12) + 1);
var purple = Math.floor((Math.random() * 12) + 1);

var guessTotal = 0;
var wins = 0;
var losses = 0;

$(".goal").html(goal);


$(".lghtGreen").click(function() {
  update(lghtGreen);
});

$(".drkGreen").click(function() {
  update(dkGreen);
});

$(".red").click(function() {
  update(red);
});

$(".purple").click(function() {
  update(purple);
});


function reset() {
  goal = Math.floor((Math.random() * 120) + 19);
  $(".goal").html(goal);

  lghtGreen = Math.floor((Math.random() * 12) + 1);
  drkGreen = Math.floor((Math.random() * 12) + 1);
  red = Math.floor((Math.random() * 12) + 1);
  purple = Math.floor((Math.random() * 12) + 1);

  guessTotal = 0;

  $(".current").html(guessTotal);
}


function update(color) {
  guessTotal += color;

  $(".current").empty();
  $(".current").append(guessTotal);

  if (guessTotal > goal) {
    losses++;
    $("#losses").html(losses);

    reset();

  } else if (guessTotal == goal) {
      wins++;
      $("#wins").html(wins);
      reset();
  };
};

