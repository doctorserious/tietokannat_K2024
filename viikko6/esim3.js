const prompt = require('prompt-sync');
function myFunction(p1,p2) {
    return p1*p2;
}
console.log('lukujen tulo on', myFunction(2,5));

function myComp(p1,p2) {
if (p1<p2)
    return p1;
if (p2 >p1)
    return p2;
else 
    return 0;
}
console.log('suurempi luku on',myComp(3,5));

function getSum()
{
    let s1=(prompt("Anna 1. luku: "));
    let x=parseFloat(s1);
    let s2=parseFloat(prompt("Anna 2. luku: "));
    let y=parseFloat(s2);
    return sum (x,y);


}
console.log(getSum());