var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var arrdj = [];
function djeljivo (arr)
 {
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]%3==0) 
        {
            arrdj.push(arr[i]);
        }
    }
    console.log(arr + " -> " + " Brojevi djeljivi s 3: " + arrdj.join(" "));
}



djeljivo(arr);

