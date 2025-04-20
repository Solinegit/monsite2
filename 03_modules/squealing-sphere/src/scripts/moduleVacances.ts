

import { pi, phi, soustraire, absolue} from "./moduleMath.ts";

export const nbJours = 40
export function calculerJoursRestants(nbJours: number) {
	// On considère que l'on a 40 jours de vacances dnas l'année
    return absolue(soustraire(40, nbJours));
}
