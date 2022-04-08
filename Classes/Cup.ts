import { Dice } from "./Dice";

export class Cup extends Dice {

	valueCup : number; 
	listDices : Array<Dice>;

	

	lancerCup() {

		let valueDice = 0;
		this.listDices.forEach( dice => {
		valueDice += dice.lancer()
		})
		this.valueCup = valueDice;
		console.log("Valeur du Gobelet:" + this.valueCup )
		return this.valueDice;
		
	}

	afficherScore() {
		return this.valueCup;
	}

}