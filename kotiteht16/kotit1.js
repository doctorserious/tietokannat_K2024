function myComp(p1, p2) {
    if (p1 > p2)
        return p1;
    if (p2 > p1)
        return p2;
    return "yhtä suuret";
    
}
console.log("isompi luku on: ", myComp(3,7));