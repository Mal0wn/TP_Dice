import { Cup } from "./Cup"

export class Player {

name: string ; 
	score : number;
	nbTrWi : number;

	constructor(name : string ) {
	
		this.name = name;
		this.nbTrWi = 0;
		this.score = 0;
	}

	/**
	 * 
	 * @param Cup : Methode qui prend en parametre Cup et qui permet de jouer
	 */
	play(cup : Cup ) {
	
	cup.lancerCup;
	this.score = cup.valueDice ;
	this.nbTrWi += this.nbTrWi;
		
	
	}


	
	displayScore(cup : Cup) {
	cup.afficherScore
	}


}