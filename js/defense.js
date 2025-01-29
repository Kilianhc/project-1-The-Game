class Defense {
    constructor(gameScreen, x, y) {
        this.gameScreen = gameScreen
        this.x = x
        this.y = y
        this.width = 100
        this.height = 90
        this.element = document.createElement("img")
        this.element.src = "./images/IMG_1955.PNG"
        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`

        this.gameScreen.appendChild(this.element)
    }

    move() {
        this.y += 3
        this.element.style.top = `${this.y}px`
    }
    remove() {
        this.element.remove()
    }
}