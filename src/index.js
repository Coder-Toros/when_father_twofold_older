"use strict"

// const fathersYearsOld = prompt("How old is Fathrer?", 28);
// const sonsYearsOld = prompt("How old is Son?", 20);

/** Documentation of ageCount
 * @param {number} father 
 * @param {number} son 
 * @return {string} - when father twofold older than son.
*/  

const ageCount = (father, son) => { 
    if (son <= 0) {
        return "A son hasn't been born yet at this age!";
    }

    if( father - son <= 15){
        return "Extra small age difference!";
    }

    let res = 0;
    let neededAgeSon = father - son;
    let neededAgeFather = (neededAgeSon * 2);
    
    if(neededAgeFather > father) {
        res = neededAgeFather - father;
        return `Father will be twofold older than son in ${res} years`;
    } else if (neededAgeFather < father) {
        res = father - neededAgeFather;
        return `Father was twofold older than son ${res} years ago`;
    } else if (neededAgeFather === father) {
        return 'Father is twofold older than son this year';
    }
}

console.log(ageCount(28, 2))
console.log(ageCount(25, 0))
console.log(ageCount(20, 10))
console.log(ageCount(24, 8))