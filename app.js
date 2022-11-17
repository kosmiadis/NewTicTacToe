class Player1 {
    constructor() {
        this.symbol = 'X'
        this.wins = 0
    }
    valueOf() {
        return 'player1'
    }
}

class Player2 {
    constructor() {
        this.symbol = 'O'
        this.wins = 0
    }
    valueOf () {
        return 'player2'
    }

}

const p1 = new Player1()
const p2 = new Player2()

class Game {
    static boxes = document.querySelectorAll('.box')
    static currentPlayerP = document.querySelector('.player')
    static currentPlayer = p1
    static emptyBoxes = 8

    
    static changePlayerOrder () {
        if (this.currentPlayer.valueOf() == 'player1') {
            this.currentPlayer = p2
        }
        else if (this.currentPlayer.valueOf() == 'player2') {
            this.currentPlayer = p1
        }
    
    
        
    }

    static startGame () {
        this.currentPlayerP.textContent = this.currentPlayer.symbol + ' Plays!'
    
        this.boxes.forEach(box => box.addEventListener('click', e => {
            if (e.target.textContent == '') {
                e.target.textContent = this.currentPlayer.symbol
                this.checkForWin()
                this.changePlayerOrder()  
                this.emptyBoxes-- 
            }
        }))
    }

    static checkForWin() {    
        const diagonal = [
            [this.boxes[0], this.boxes[4], this.boxes[8]],
            [this.boxes[2], this.boxes[4], this.boxes[6]]
        ]
        if (this.emptyBoxes > 0) {

            //Horizontal Checking
            for (let i=0; i<=6; i+=3) {
                const horizontalBoxes = [this.boxes[i], this.boxes[i+1], this.boxes[i+2]]
                //Horizontal
                if (horizontalBoxes[0].textContent == this.currentPlayer.symbol 
                    && horizontalBoxes[1].textContent == this.currentPlayer.symbol 
                    && horizontalBoxes[2].textContent == this.currentPlayer.symbol) {
                    for (const box of horizontalBoxes) {
                        box.style.backgroundColor = 'lightgreen';
                    }        
                    this.currentPlayerP.textContent = this.currentPlayer.symbol + ' Won!'
                    setTimeout(this.clearBoxes, 2000)
                }
            }

            //Vertical Checking 
            for (let i=0; i<3; i++) {
                const verticalBoxes = [this.boxes[i], this.boxes[i+3], this.boxes[i+6]]
                
                //Vertical
                if (verticalBoxes[0].textContent == this.currentPlayer.symbol 
                    && verticalBoxes[1].textContent == this.currentPlayer.symbol 
                    && verticalBoxes[2].textContent == this.currentPlayer.symbol) {
                    for (const box of verticalBoxes) {
                        box.style.backgroundColor = 'lightgreen';
                    }   
                    this.currentPlayerP.textContent = this.currentPlayer.symbol + ' Won!'  
                    setTimeout(this.clearBoxes, 2000)
                }
            }

            //Diagonal Checking
            if (diagonal[0][0].textContent == this.currentPlayer.symbol 
                && diagonal[0][1].textContent == this.currentPlayer.symbol
                && diagonal[0][2].textContent == this.currentPlayer.symbol) {
                    for (const box of diagonal[0]) {
                        box.style.backgroundColor = 'lightgreen';
                    }   
                    this.currentPlayerP.textContent = this.currentPlayer.symbol + ' Won!'  
                    setTimeout(this.clearBoxes, 2000)
                }
            }

            if (diagonal[1][0].textContent == this.currentPlayer.symbol 
                && diagonal[1][1].textContent == this.currentPlayer.symbol
                && diagonal[1][2].textContent == this.currentPlayer.symbol) {
                    for (const box of diagonal[1]) {
                        box.style.backgroundColor = 'lightgreen';
                    }   
                    this.currentPlayerP.textContent = this.currentPlayer.symbol + ' Won!'  
                    setTimeout(this.clearBoxes, 3000)
        }
        else if (this.emptyBoxes == 0){
            for (const box of this.boxes) {
                box.style.backgroundColor = '#f95353';
            }
            this.currentPlayerP.textContent = 'Draw'
            setTimeout(this.clearBoxes, 2000)
        }
    }

    static clearBoxes () {
        this.currentPlayer = p1
        for (const box of Game.boxes) {
            box.style.backgroundColor = 'white'
            box.textContent = ''
            Game.emptyBoxes = 8
        }
        Game.currentPlayerP.textContent = this.currentPlayer.symbol + ' Plays!'
    
    }

}

window.addEventListener('load', e => {
    Game.startGame()
})




