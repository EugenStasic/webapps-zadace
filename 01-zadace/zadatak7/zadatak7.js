var x = 23;
var sum = 1;
var mnozarr = [];
function provimnoz (x)
{
    if(x >= 0 && x <= 1000) 
    {
        for(var i=1; i<x; i++)
        {
            if (i%7==0) 
            {
                mnozarr.push(i);
            } 
        }
    }
    
    for(var i = 0; i<mnozarr.length; i++)
    {
        sum *= mnozarr[i];
    }
     
    console.log(x + " -> " + sum)
}

provimnoz(x)