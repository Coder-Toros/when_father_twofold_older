"use strict"

const fathersYearsOld = prompt("How old is Fathrer?", 28);
const sonsYearsOld = prompt("How old is Son?", 20);

/** Documentation of ageCount
 * @param {number} father 
 * @param {number} son 
 */

const ageCount = (father, son) => { 
    if (son <= 0) {
        alert("A son hasn't been born yet at this age!")
        window.location.reload();
        return false;
    }

    if (father < 16) {
        alert("Extra young father! He should be 16 y. o. at least!")
        window.location.reload();
        return false;
    }

    if( (father - son) > 15 ||
        (son - father) > 15 ){
        alert("Extra big age difference!")
        window.location.reload()
        return false;
    }

    if ((father - son < 0 ||
         father == son)) {
        alert("So strange family!")
        window.location.reload()
        return false;
    }

    let res = 0;
    let neededAgeSon = father - son;
    let neededAgeFather = (neededAgeSon * 2);
    
    if(neededAgeFather > father) {
        res = neededAgeFather - father
        alert(`Father will be twofold older than son in ${res} years`)
    } else {neededAgeFather < father} {
        res = father - neededAgeFather;
        alert(`Father was twofold older than son ${res} years ago`)
    }
}

ageCount(fathersYearsOld, sonsYearsOld)