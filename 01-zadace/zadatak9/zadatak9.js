const a = (o1,o2) =>
{
    if(Object.keys(o1).values===Object.keys(o2).values) return true 
    else return false 
}

const b1= {a:1,b:2,c:3};
const b2= {a:321,b:3,c:1};
console.log(a(b1,b2))