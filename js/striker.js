class Striker {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.directionX = 0
        this.directionY = 0
        this.isHeading = false
        this.element = document.createElement("img")
        this.element.src = imgSrc
        this.element.style.position = "absolute"
        this.element.style.width = `${width}px`
        this.element.style.height = `${height}px`
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
        

        this.gameScreen.appendChild(this.element)
        this.addHeadHit()
    }

    move() {
        this.left += this.directionX
        this.top += this.directionY

        if (this.left < 10) {
            this.left = 10
        }
        if (this.top < 10) {
            this.top = 10
        }
        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width - 10
        }
        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height - 10
        }
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    addHeadHit() {
        document.addEventListener("keydown", (event) => {
            if(event.key === "Tab" && !this.isHit) {
                event.preventDefault()
                this.headHit()
            }
        })
    }

    headHit() {
        this.isHit = true
        let originalTop = this.top
        let headHitHeight = 30

        this.top -= headHitHeight
        this.updatePosition()

        setTimeout(() => {
            this.top = originalTop
            this.updatePosition()
            this.isHit = false
        }, 150)
    }

}