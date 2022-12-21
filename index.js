var n1=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;
var n3=Math.floor(Math.random()*6)+1;
document.querySelector("img").setAttribute("src","images/dice"+n1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+n2+".png");
document.querySelectorAll("img")[2].setAttribute("src","images/dice"+n3+".png");
document.querySelector("h1").innerHTML="player1 wins";
if(n1===n2 && n2===n3)
document.querySelector("h1").innerHTML="draw";
if(n1>n2)
{
  if(n1>n3)
  {
    document.querySelector("h1").innerHTML="player1 wins";
  }
  else if(n3>n1)
  {
    document.querySelector("h1").innerHTML="player3 wins";
  }
  else
  {
    document.querySelector("h1").innerHTML="player1,3 wins";
  }
}
else if(n2>n1)
{
   if(n2>n3)
   {
     document.querySelector("h1").innerHTML="player2 wins";
   }
   else if(n3>n2)
   {
     document.querySelector("h1").innerHTML="player3 wins";
   }
   else
   {
     document.querySelector("h1").innerHTML="player2,3 wins";
   }
}
else
{
  if(n1>n3)
  {
    document.querySelector("h1").innerHTML="player1,2 wins";
  }
  else if(n3>n1)
  {
    document.querySelector("h1").innerHTML="player3 wins";
  }
  else
  {
    document.querySelector("h1").innerHTML="draw";
  }
}
