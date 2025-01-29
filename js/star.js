class Star {
    constructor(gameScreen) {
       this.gameScreen = gameScreen
       this.left = Math.floor(Math.random() * (gameScreen.offsetWidth - 100))
       this.top = 0
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
        this.top += 3
        this.updatePosition()
    }
    remove() {
        this.element.remove()
    }
    }
    