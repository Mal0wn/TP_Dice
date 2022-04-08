import { Cup } from "./Cup";
import { Player } from "./Player";
import { Dice } from "./Dice";

export class Game {

	nbTours : number;
	nbPlayers : Array<Player>;

	cup : Cup;
	ready : boolean= false

	addPlayer (...nbPlayers : Player[]) : void {
	
		nbPlayers.forEach(player =>{
		this.nbPlayers.push(player)
		})
	}


	initaliserPartie() : void {
		
			this.addPlayer(...this.nbPlayers);
			this.nbTours = this.nbPlayers.length + 1;

	}

	addDice() : void {
		this.cup = new Cup();
		this.nbPlayers.forEach(player => {
			this.cup.listDices.push(new Dice);
			console.log(" bete " + player) 
		})
	}

	playTr() {
	
		this.nbPlayers.forEach(player => {
		player.score = player.play(this.cup)
		console.log("Score: " + player.score)
		})

	}

	lancerPartie() {

		this.initaliserPartie()
		this.addDice()

		for ( let i = 0 ; i < this.nbTours ; i++) {
				this.playTr()
				//Affiche gagnant
		}

	}

	afficherGagnant() {
		
		this.nbPlayers.forEach(player => {
		
		
		})

		
		
	}

}