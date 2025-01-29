window.onload = function () {
    const startButton = document.getElementById("start-button")
    const restartButton = document.getElementById("restart-button")

    let game;
    const audioEnd = new Audio("./audios/615204__kbrecordzz__black-metal-groove-metal-song.mp3")
    audioEnd.loop = true
    const audioGame = new Audio("./audios/192450__marek97pl__cheering-lech-poznan-w-grodzie-przemysawa (1).mp3")
    const audioStart = new Audio("audios/Voz 006_sd (online-audio-converter.com).mp3")

    startButton.addEventListener("click", function () {
        audioStart.play()
        audioGame.play()

        startGame()
    })

    function startGame() {
        game = new Game(audioEnd, audioGame)
        game.start()
    }

    restartButton.addEventListener("click", function(){
        if (game) {
            audioEnd.pause()
            audioEnd.currentTime = 0
            audioGame.pause()
            audioGame.currentTime = 0
            game.endGame()
        } 
        
        const scoreElement = document.getElementById("score");
        scoreElement.textContent = "0";
        startGame()
        audioGame.play()
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