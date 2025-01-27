class Game {
    constructor() {
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
        this.time = 10
        this.gameIsOver = false
        this.timeInterval = null
    }
    start() {
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        this.introScreen.style.display = "none"
        this.gameScreen.style.display = "block"
        this.statsScreen.style.display = "block"
        this.containerScreen.style.display = "flex"
        this.gameEndScreen.style.display = "none"

        this.startTimer()
    }
    startTimer() {
        const timeElement = document.getElementById("time")
        this.timeInterval = setInterval(() => {
            this.time -= 1
            const minutes = Math.floor(this.time / 60).toString().padStart(2, "0")
            const seconds = (this.time % 60).toString().padStart(2, "0")
            timeElement.textContent = `${minutes}:${seconds}`

            if(this.time <= 0) {
                clearInterval(this.timeInterval)
                this.endGame()
            }
        }, 1000)
    }
    endGame() {
        if(this.timeInterval) {
            clearInterval(this.timeInterval)
        }

        this.striker.element.remove()
        this.defenses.forEach(defense => defense.element.remove())

        this.gameIsOver = true
        this.gameScreen.style.display = "none"
        this.containerScreen.style.display = "none"
        this.gameEndScreen.style.display = "block"
    }
}