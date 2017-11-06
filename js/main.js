window.onload = function main()
{
  logbug();
  setupSvg();
  timer = setInterval(time_roll,time_speed/100);
}

function logbug()
{
  console.log("aLifes'Game, by Nicola Sella and Gabriele Labanca");
}

function time_roll()
{
  update();
  graphic_update();
}
