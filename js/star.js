class Star {
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.top = Math.floor(Math.random() * 600 + 70)
        this.left = 0
        this.width = 100
        this.height = 90
        this.element = document.createElement("img")
        this.element.src = "./images/Vinicius-PNG-Render-Transparent-Image-Real-Madrid-Sport-Renders.png"
        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.gameScreen.appendChild(this.element)
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    move() {
        this.left += 4
        if (this.left + this.width > this.gameScreen.offsetWidth) {
            this.remove()
        } else {
            this.updatePosition()
        }
    }

    remove() {
        this.element.remove()
    }
}
