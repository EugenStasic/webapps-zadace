var x;
var a=true;
function provjera (x){
    for(var i =100; i<=15000; i++){
        if(x==i) {
            a=true;
            break;
        }
        else{
            a=false;
        }
    }
if (a==true){
    console.log(x + " je unutar [100, 15000]");
}
else{
    console.log(x + " nije unutar [100, 15000]");
}
}

provjera(22)