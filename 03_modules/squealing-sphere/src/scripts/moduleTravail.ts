import { pi, phi, soustraire, absolue} from "./moduleMath.ts";
import { joursPris } from "./calculJour.ts";

export function calculerJoursRestants(joursPris: number) {

    return absolue(soustraire(365, joursPris));
}

// on considère qu'on prend tous nos jours de vacances 
