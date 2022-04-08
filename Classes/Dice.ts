export class Dice {

	valueDice! : number ; 
	nbFaces! : number

	
	/**
	 * Methode qui va lancer LE dé et retourner une value
	 */
	lancer(nbFaces : number) : void {
		this.valueDice = Math.floor(Math.random() * nbFaces);
		console.log(this.valueDice);
	}

}