class Defense {
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.left = Math.floor(Math.random() * 300 + 70)
        this.top = 0
        this.width = 100
        this.height = 90
        this.element = document.createElement("img")
        this.element.src = "./images/IMG_1955.PNG"
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
        this.top += 4
        if (this.top + this.height > this.gameScreen.offsetHeight) {
            this.remove()
        } else {
            this.updatePosition()
        }

    }
    
    remove() {
        this.element.remove()
    }
}