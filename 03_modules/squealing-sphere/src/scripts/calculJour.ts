

import { calculerJoursRestants as calculerJoursTravail } from "./moduleTravail.ts";
import { calculerJoursRestants as calculerJoursVacances, nbJours} from "./moduleVacances.ts";

const annonce: HTMLDivElement = document.createElement("div");
annonce.textContent = 'Nous sommes le 1er janvier, combien de jours de vacances avez-vous pris ?';
document.body.appendChild(annonce);

const input = document.createElement("input");
input.type = "number";
input.placeholder = "Jours de vacances pris";
document.body.appendChild(input);


const button = document.createElement("button");
button.textContent = "Calculer";
document.body.appendChild(button);


button.addEventListener("click", () => {
    const joursPris = parseInt(input.value) || 0;
    const joursRestants = calculerJoursVacances(nbJours - joursPris);
    const jourstaff = calculerJoursTravail(joursPris);
    resultat.textContent = `Jours de travail restants : ${jourstaff.toString()}`;
    resultata.textContent = `Jours de vacances restants : ${joursRestants.toString()}`;
});
export const joursPris = parseInt(input.value) || 0;


const resultat: HTMLDivElement = document.createElement("div");
resultat.textContent = `jours de travail restants = ${calculerJoursTravail(joursPris).toString()}`;
document.body.appendChild(resultat);

const resultata: HTMLDivElement = document.createElement("div");
resultata.textContent = `jours de vacances restants = ${calculerJoursVacances(nbJours).toString()}`;
document.body.appendChild(resultata);



