var x;
var count;

function pretvordba(x)
{
   let sat = Math.floor(x/60);
   let min = x % 60;
   console.log(x + "-> "  + sat +  " sata i " + min + " minuta");
}

pretvordba(150)

