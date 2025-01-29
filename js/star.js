class Star {
    constructor(gameScreen) {
       this.gameScreen = gameScreen
       this.left = Math.floor(Math.random() * 300 + 70)
       this.bottom = 0
       this.width = 100
       this.height = 90
       this.element = document.createElement("img")
       this.element.src = "./images/Vinicius-PNG-Render-Transparent-Image-Real-Madrid-Sport-Renders.png"
       this.element.style.position = "absolute"
       this.element.style.width = `${this.width}px`
       this.element.style.height = `${this.height}px`
       this.element.style.left = `${this.left}px`
       this.element.style.bottom = `${this.bottom}px`

       this.gameScreen.appendChild(this.element) 
    }
    updatePosition() {
        this.element.style.left = `${this.left}px`
        this.element.style.bottom = `${this.bottom}px`
    }
    move() {
        this.bottom += 4
        this.updatePosition()
    }
    remove() {
        this.element.remove()
    }
    }
    