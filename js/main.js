window.onload = function main()
{
  logbug();
  setupSvg();
  setInterval(action,1000/150);
}

function logbug()
{
  console.log("ehi");
}

function action()
{
  update();
  move();
}
