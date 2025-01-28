window.onload = function () {
    const startButton = document.getElementById("start-button")
    const restartButton = document.getElementById("restart-button")

    let game;

    startButton.addEventListener("click", function () {
        startGame()
    })

    function startGame() {
        game = new Game()
        game.start()
    }

    restartButton.addEventListener("click", function(){
        if (game) {
            game.endGame()
        } 
        
        const scoreElement = document.getElementById("score");
        scoreElement.textContent = "0";
        startGame()
    })

    function keys(event) {
        const key = event.key
        const possiblesKeyDown = [
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Tab",
        ]
        if(possiblesKeyDown.includes(key)) {
            event.preventDefault()

            switch (key) {
                case "ArrowLeft":
                    game.striker.directionX = -1.5
                    break;
                case "ArrowRight":
                    game.striker.directionX = 1.5
                    break;
                case "ArrowUp":
                    game.striker.directionY = -1.5
                    break;
                case "ArrowDown":
                    game.striker.directionY = 1.5
                    break;
                case "Tab":
                    for (let i = 0; i < game.defenses.length; i++) {
                        const defense = game.defenses[i]
                        if(game.checkCollision(game.striker, defense)) {
                            game.defenseRemoval(defense)

                            //const audioEliminate = new Audio()
                            //audioEliminate.play()
                            break;
                        }
                    }
                    break;
            }
        }
    }
    function keysUp (event) {
        const key = event.key
        switch (key) {
            case "ArrowLeft":
            case "ArrowRight":
                game.striker.directionX = 0
                break;
            case "ArrowUp":
            case "ArrowDown":
                game.striker.directionY = 0
                break;
        }
    }
    window.addEventListener("keydown", keys)
    window.addEventListener("keyup", keysUp)
}