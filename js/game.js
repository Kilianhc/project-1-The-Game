class Game {
    constructor(audioEnd, audioGame) {
        this.introScreen = document.getElementById("intro-screen")
        this.gameScreen = document.getElementById("game-screen")
        this.gameEndScreen = document.getElementById("end-game")
        this.statsScreen = document.getElementById("stats")
        this.containerScreen = document.getElementById("game-container")
        this.striker = new Striker(
            this.gameScreen,
            500,
            650,
            80,
            70,
            "./images/IMG_1953.PNG")
        this.height = 700
        this.width = 600
        this.defenses = []
        this.score = 0
        this.time = 60
        this.gameIsOver = false
        this.timeInterval = null
        this.audioEnd = audioEnd
        this.audioEnd.loop = true;
        this.audioGame = audioGame
        this.audioGame.loop = true
    }
    start() {
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        this.introScreen.style.display = "none"
        this.gameScreen.style.display = "block"
        this.statsScreen.style.display = "block"
        this.containerScreen.style.display = "flex"
        this.gameEndScreen.style.display = "none"

        this.audioGame.play()
        this.startTimer()
        this.update()
        this.audioEnd.pause()

        this.defenseInterval = setInterval(() => {
            this.generateDefense()
        }, 2000)
    }

    startTimer() {
        const timeElement = document.getElementById("time")
        this.timeInterval = setInterval(() => {
            this.time -= 1
            const minutes = Math.floor(this.time / 60).toString().padStart(2, "0")
            const seconds = (this.time % 60).toString().padStart(2, "0")
            timeElement.textContent = `${minutes}:${seconds}`

            if (this.time <= 0) {
                clearInterval(this.timeInterval)
                this.endGame()
            }
        }, 1000)
    }

    generateDefense() {
        let newDefense;
        if(Math.random() < 0.7) {
            newDefense = new Defense(this.gameScreen)
        } else {
            newDefense = new Star(this.gameScreen)
        }
        this.defenses.push(newDefense)
    }

    checkCollision(striker, defense) {
        const strikerRect = striker.element.getBoundingClientRect()
        const defenseRect = defense.element.getBoundingClientRect()

        return !(
            strikerRect.top > defenseRect.bottom ||
            strikerRect.bottom < defenseRect.top ||
            strikerRect.left > defenseRect.right ||
            strikerRect.right < defenseRect.left
        )
    }

    update() {
        this.striker.move()

        for (let i = 0; i < this.defenses.length; i++) {
            const defense = this.defenses[i]
            defense.move()
        }

        if (!this.gameIsOver) {
            requestAnimationFrame(() => this.update())
        }
    }

    updateScore() {
        const scoreElement = document.getElementById("score")
        scoreElement.textContent = this.score
    }
    defenseRemoval(defense) {
        defense.remove()
        this.defenses.splice(this.defenses.indexOf(defense), 1)
        if (defense instanceof Defense) {
            const audioEliminate = new Audio("./audios/siuuu-made-with-Voicemod.mp3")
            audioEliminate.play()
            this.score += 1
        } else {
            const audioEliminate = new Audio("./audios/cr_suuu.mp3")
            audioEliminate.play()
            this.score += 3
        }
        this.updateScore()
    }

    endGame() {
        if (this.timeInterval) {
            clearInterval(this.timeInterval)
        }
        if (this.defenseInterval) {
            clearInterval(this.defenseInterval)
        }

        const recordElement = document.getElementById("record")
        recordElement.textContent = this.score

        this.striker.element.remove()
        this.defenses.forEach(defense => defense.element.remove())

        this.gameIsOver = true
        this.gameScreen.style.display = "none"
        this.containerScreen.style.display = "none"
        this.gameEndScreen.style.display = "block"

        this.audioGame.pause()
        this.audioGame.currentTime = 0
        this.audioEnd.play()


    }
}