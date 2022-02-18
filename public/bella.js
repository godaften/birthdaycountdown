const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const currentYear = new Date().getFullYear()
const setCountdownTime = new Date(`June 1 ${ currentYear } 00:00:00`)
const setCountdownTimeNextYear = new Date(`June 1 ${ currentYear +1 } 00:00:00`)

function countdownTime() {

    const currentTime = new Date()

    let diff = setCountdownTime - currentTime

    if (setCountdownTime > currentTime) {
        diff = setCountdownTime - currentTime
    }
    else {
        diff = setCountdownTimeNextYear - currentTime
    }

    const d = Math.floor(diff / 1000 / 60 / 60 / 24)
    const h = Math.floor(diff / 1000 / 60 / 60) % 24
    const m = Math.floor(diff / 1000 / 60) % 60
    const s = Math.floor(diff / 1000) % 60

    days.innerText = d
    hours.innerText = h < 10 ? '0' + h : h
    minutes.innerText = m < 10 ? '0' + m : m
    seconds.innerText = s < 10 ? '0' + s : s
}

 setInterval(countdownTime, 1000)