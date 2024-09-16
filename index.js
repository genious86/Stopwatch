const display = document.getElementById("display")
let timer = null
let startime = 0
let elapsedtime = 0
let isRunning = false

function start(){

    if (!isRunning){
        startime = Date.now() - elapsedtime
        timer = setInterval(update,10)
        isRunning = true
    }
    
}

function stop(){

    if (isRunning){
        clearInterval(timer)
        elapsedtime = Date.now() - startime
        isRunning = false
    }

}

function reset(){

    clearInterval(timer)
    startime = 0
    elapsedtime = 0
    isRunning = false
    display.textContent ="00:00:00:00"
    
    }

function update(){

    const currentTime = Date.now()
    elapsedtime = currentTime - startime

    let hours = Math.floor(elapsedtime/(1000 * 60 * 60 ))
    let minutes = Math.floor(elapsedtime/(1000 * 60 ) % 60 )
    let seconds = Math.floor(elapsedtime/1000  % 60 )
    let milliseconds = Math.floor(elapsedtime % 1000 / 10 )

    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milliseconds = String(milliseconds).padStart(2, "0")

    display.textContent = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`
}