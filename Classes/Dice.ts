export class Dice {

	valueDice! : number ; 
	nbFaces! : number;

	constructor (nbFaces? : number) {
	
	this.nbFaces = nbFaces || 6 ;
	}

	
	/**
	 * Methode qui va lancer LE dé et retourner une value
	 */
	lancer() : number {
		this.valueDice = Math.floor(Math.random() * (this.nbFaces - 1 )) + 1 ;
		console.log(this.valueDice);
		return this.valueDice;
	}

	addDice() : void {
	
	}

}