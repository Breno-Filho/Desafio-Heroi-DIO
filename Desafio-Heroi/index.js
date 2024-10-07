//Usando Switch Case
let nomeHeroi = "Breno";
let nivelXP = 10000;

function getNivelXP(nivelXP) {
    switch (true) {
        case (nivelXP <= 1000):
            return "Ferro";
        case (nivelXP >= 1001 && nivelXP <= 2000):
            return "Bronze";
        case (nivelXP >= 2001 && nivelXP <= 5000):
            return "Prata";
        case (nivelXP >= 6001 && nivelXP <= 7000):
            return "Ouro";
        case (nivelXP >= 7001 && nivelXP <= 8000):
            return "Platina";
        case (nivelXP >= 8001 && nivelXP <= 9000):
            return "Ascendente";
        case (nivelXP >= 9001 && nivelXP <= 10000):
            return "Imortal";
        default:
            return "Radiante";
    }
}
let nivel = getNivelXP(nivelXP);
console.log("O héroi de nome " + nomeHeroi + " está no nível de " + nivel); 



// Usando IF, ELSE IF e ELSE
/* let nomeHeroi = "Breno";
let nivelXP = 10001;

function determinarNivelHeroi(nivelXP) {
    if (nivelXP <= 1000) {
        return "Ferro";
    } 
    else if (nivelXP >= 1001 && nivelXP <= 2000) {
        return "Bronze";
    } 
    else if (nivelXP >= 2001 && nivelXP <= 5000) {
        return "Prata";
    } 
    else if (nivelXP >= 6001 && nivelXP <= 7000) {
        return "Ouro";
    } 
    else if (nivelXP >= 7001 && nivelXP <= 8000) {
        return "Platina";
    } 
    else if (nivelXP >= 8001 && nivelXP <= 9000) {
        return "Ascendente";
    } 
    else if (nivelXP >= 9001 && nivelXP <= 10000) {
        return "Imortal";
    } 
    else {
        return "Radiante";
    }
}

let nivel = determinarNivelHeroi(nivelXP);
console.log("O héroi de nome " + nomeHeroi + " está no nível " + nivel); */

