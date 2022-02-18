const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const currentYear = new Date().getFullYear()

const bellaThisYear = new Date(`June 1 ${ currentYear } 00:00:00`)
const bellaNextYear = new Date(`June 1 ${ currentYear +1 } 00:00:00`)

const lunaThisYear = new Date(`September 7 ${ currentYear } 00:00:00`)
const lunaNextYear = new Date(`September 7 ${ currentYear +1 } 00:00:00`)

const livaThisYear = new Date(`May 3 ${ currentYear } 00:00:00`)
const livaNextYear = new Date(`May 3 ${ currentYear +1 } 00:00:00`)

const morThisYear = new Date(`September 15 ${ currentYear } 00:00:00`)
const morNextYear = new Date(`September 15 ${ currentYear +1 } 00:00:00`)

const farThisYear = new Date(`October 14 ${ currentYear } 00:00:00`)
const farNextYear = new Date(`October 14 ${ currentYear +1 } 00:00:00`)


function bellaBirthdayCountdown() {

    const currentTime = new Date()

    let diff

    if (bellaThisYear > currentTime) {
        diff = bellaThisYear - currentTime
    }
    else {
        diff = bellaNextYear - currentTime
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

function lunaBirthdayCountdown() {

    const currentTime = new Date()

    let diff

    if (lunaThisYear > currentTime) {
        diff = lunaThisYear - currentTime
    }
    else {
        diff = bellaNextYear - currentTime
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

function livaBirthdayCountdown() {

    const currentTime = new Date()

    let diff

    if (livaThisYear > currentTime) {
        diff = livaThisYear - currentTime
    }
    else {
        diff = livaNextYear - currentTime
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

function morBirthdayCountdown() {

    const currentTime = new Date()

    let diff

    if (morThisYear > currentTime) {
        diff = morThisYear - currentTime
    }
    else {
        diff = morNextYear - currentTime
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

function farBirthdayCountdown() {

    const currentTime = new Date()

    let diff

    if (farThisYear > currentTime) {
        diff = farThisYear - currentTime
    }
    else {
        diff = farNextYear - currentTime
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


btnjul = document.getElementById('btnbella')
btnjul.addEventListener("click", bellaBirthdayCountdown)

btnsommer = document.getElementById('btnluna')
btnsommer.addEventListener("click", lunaBirthdayCountdown)

btnsommer = document.getElementById('btnliva')
btnsommer.addEventListener("click", livaBirthdayCountdown)

btnsommer = document.getElementById('btnmor')
btnsommer.addEventListener("click", morBirthdayCountdown)

btnsommer = document.getElementById('btnfar')
btnsommer.addEventListener("click", farBirthdayCountdown)

 // setInterval(countdownTime, 1000)

