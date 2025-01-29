class Star extends Defense {
    constructor(gameScreen) {
       super(gameScreen)
       this.left = Math.floor(Math.random() * 300 + 70)
       this.top = 0
       this.width = 100
       this.height = 90
       this.element = document.createElement("img")
       this.element.src = "../images/Vinicius-PNG-Render-Transparent-Image-Real-Madrid-Sport-Renders.png"
       this.element.style.position = "absolute"
       this.element.style.width = `${this.width}px`
       this.element.style.height = `${this.height}px`
       this.element.style.left = `${this.left}px`
       this.element.style.top = `${this.top}px`

       this.gameScreen.appendChild(this.element) 
    }
    }
    