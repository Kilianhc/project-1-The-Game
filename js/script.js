window.onload = function () {
    const startButton = document.getElementById("start-button")
    const restartButton = document.getElementById("restart-button")

    let game;
    const audioEnd = new Audio("./audios/615204__kbrecordzz__black-metal-groove-metal-song.mp3")
    const audioGame = new Audio("./audios/192450__marek97pl__cheering-lech-poznan-w-grodzie-przemysawa (1).mp3")
    const audioStart = new Audio("audios/Voz 006_sd (online-audio-converter.com).mp3")

    function playAudio(audio) {
        audio.currentTime = 0
        audio.play()
    }

    function stopAudio(audio) {
        audio.pause()
        audio.currentTime = 0
    }

    function startGame() {
        game = new Game(audioEnd, audioGame)
        game.start()
    }

    function restartGame() {
        if (game) {
            stopAudio(audioEnd)
            stopAudio(audioGame)
            game.endGame()
        }

        const scoreElement = document.getElementById("score");
        scoreElement.textContent = "0";
        startGame()
        playAudio(audioGame)
    }



    startButton.addEventListener("click", function () {
        playAudio(audioStart)
        playAudio(audioGame)
        startGame()
    })

    restartButton.addEventListener("click", restartGame)
    
    function keys(event) {
        const key = event.key
        const possiblesKeyDown = [
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Tab",
        ]
        if (possiblesKeyDown.includes(key)) {
            event.preventDefault()

            switch (key) {
                case "ArrowLeft":
                    game.striker.directionX = -2
                    break;
                case "ArrowRight":
                    game.striker.directionX = 2
                    break;
                case "ArrowUp":
                    game.striker.directionY = -2
                    break;
                case "ArrowDown":
                    game.striker.directionY = 2
                    break;
                case "Tab":
                    for (let i = 0; i < game.defenses.length; i++) {
                        const defense = game.defenses[i]
                        if (game.checkCollision(game.striker, defense)) {
                            game.defenseRemoval(defense)
                            break;
                        }
                    }
                    break;
            }
        }
    }
    function keysUp(event) {
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