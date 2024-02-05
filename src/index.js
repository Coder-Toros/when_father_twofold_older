"use strict"

const fathersYearsOld = prompt("How old is Fathrer?", 28);
const sonsYearsOld = prompt("How old is Son?", 20);

const ageCount = (father, son) => {
    let res = 0;
 
    if (father <= 0 ||
        son <= 0) {
        alert("Extra younger person!")
        location.reload()
    }
    
    if( (father - son) > 15 ||
        (son - father) > 15){
        alert("Extra big age difference!")
        location.reload()
    }

    let neededAgeSon = father - son;
    let neededAgeFather = (neededAgeSon * 2);
    
    if(neededAgeFather > father) {
        res = neededAgeFather - father
    } else {neededAgeFather < father} {
        res = father - neededAgeFather;
    }
    
    return res;
}

console.log(ageCount(fathersYearsOld, sonsYearsOld))