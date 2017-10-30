window.onload = function main()
{
  logbug();
  setupSvg();
  timer = setInterval(time_roll,100000/100);
}

function logbug()
{
  console.log("ehi");
}

function time_roll()
{
  update();
  graphic_update();
}
