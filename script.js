// Initialization the variables.
const button = document.getElementById('tasbeeh')
const num = document.getElementById('count')
const reset = document.getElementById('reset')
const message = document.getElementById('message')
const daily = document.getElementById('daily')
const total = document.getElementById('total')
const today = new Date().toDateString()
const lastDate = localStorage.getItem('lastDay')
let count = 0
num.innerText = count

// Motivation messages
const messages = [
    {
        text: '🌿 ما شاء الله! استمر، ربنا يبارك فيك!',
        sound: 'sound1',
    },
    {
        text: '💖 غُفرت ذنوبك بإذن الله، كمل طريقك!',
        sound: 'sound2',
    },
    {
        text: '✨ استغفر الله، اللهم اجعل هذا العداد نورًا لقلبي!',
        sound: 'sound3',
    },
    {
        text: '🌸 سبحان الله، الحمد لله، الله أكبر!',
        sound: 'sound4',
    },
]
// --------------------------------------
const last = '🌟❤️ الله أكبر! وصلت لـ 100 استغفار، جزاك الله خيرًا'

const tasbeeh = document.getElementById('tasbeeh')

tasbeeh.addEventListener('touchstart', () => {
    tasbeeh.style.transform = 'scale(0.93)'
    tasbeeh.style.filter = 'brightness(0.85)'
})

tasbeeh.addEventListener('touchend', () => {
    tasbeeh.style.transform = 'scale(1)'
    tasbeeh.style.filter = 'brightness(1)'
})

reset.addEventListener('touchstart', () => {
    reset.style.transform = 'scale(0.93)'
    reset.style.filter = 'brightness(0.85)'
})

reset.addEventListener('touchend', () => {
    reset.style.transform = 'scale(1)'
    reset.style.filter = 'brightness(1)'
})

let dailyCount = parseInt(localStorage.getItem('dailyCount')) || 0
let totalCount = parseInt(localStorage.getItem('totalCount')) || 0

// --------------------------
if (localStorage.getItem('dailyCount')) {
    dailyCount = parseInt(localStorage.getItem('dailyCount'))
}
if (localStorage.getItem('totalCount')) {
    totalCount = parseInt(localStorage.getItem('totalCount'))
}

// --------------------------------
if (lastDate !== today) {
    dailyCount = 0
    localStorage.setItem('dailyCount', 0)
    localStorage.setItem('lastDay', today)
}
daily.innerText = `${dailyCount}: عدد الإستغفارات اليوم`
total.innerText = `${totalCount}: عدد الإستغفارات الكلي`
num.innerText = count

// --------------
button.onclick = function () {
    count += 1
    num.innerText = count

    dailyCount += 1
    totalCount += 1

    localStorage.setItem('dailyCount', dailyCount)
    localStorage.setItem('totalCount', totalCount)
    daily.innerText = `${dailyCount}: عدد الإستغفارات اليوم`
    total.innerText = `${totalCount}: عدد الإستغفارات الكلي`

    if (count === 100) {
        message.innerText = last
        message.style.opacity = 1

        setTimeout(() => {
            message.style.opacity = 0
        }, 5500)
    } else if (count % 20 === 0 && count !== 0) {
        let randomIndex = Math.floor(Math.random() * messages.length)
        let selected = messages[randomIndex]

        message.innerText = selected.text
        message.style.opacity = 1
        // message.style.visibility = 'visible'

        setTimeout(() => {
            message.style.opacity = 0
        }, 5500)
    }
}

reset.onclick = function () {
    num.innerText = 0
    count = 0
    message.style.opacity = 0
}

// ------------------------------------------
