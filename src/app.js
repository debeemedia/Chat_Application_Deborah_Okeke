// reference html elements
const senderScreen1 = document.querySelector('.senderScreen1')
const senderScreen2 = document.querySelector('.senderScreen2')
const form1 = document.querySelector('.form1')
const form2 = document.querySelector('.form2')
const name1 = document.querySelector('.name1')
const name2 = document.querySelector('.name2')
const message1 = document.querySelector('.message1')
const message2 = document.querySelector('.message2')
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
let userMessage1 = []
let userMessage2 = []
// let sender1Message
// let sender2Message

function saveMessage1 () {
    const sender1Message = {
        name: name1.value,
        message: message1.value
    }
    userMessage1.push(sender1Message)
    localStorage.setItem('sender1', JSON.stringify(userMessage1))
}

function saveMessage2 () {
    const sender2Message = {
        name: name2.value,
        message: message2.value
    }
    userMessage2.push(sender2Message)
    localStorage.setItem('sender2', JSON.stringify(userMessage2))
}

function displayMessage1 () {
    senderScreen1.innerHTML = ''
    for (let message of userMessage2) {
        const senderName = message.name
        const senderMessage = message.message
        const displayDiv = document.createElement('div')
        displayDiv.innerText = `${senderName}: ${senderMessage}`
        senderScreen1.append(displayDiv)
    }
}

function displayMessage2 () {
    senderScreen2.innerHTML = ''
    for (let message of userMessage1) {
        const senderName = message.name
        const senderMessage = message.message
        const displayDiv = document.createElement('div')
        displayDiv.innerText = `${senderName}: ${senderMessage}`
        senderScreen2.append(displayDiv)
    }
}

form1.addEventListener('submit', (e) => {
    e.preventDefault()
    // form1.reset()
    saveMessage1()
    displayMessage2()
})

form2.addEventListener('submit', (e) => {
    e.preventDefault()
    // form2.reset()
    saveMessage2()
    displayMessage1()
})

if (localStorage.getItem('sender1')) {
    userMessage1 = JSON.parse(localStorage.getItem('sender1'))
}

if (localStorage.getItem('sender2')) {
    userMessage2 = JSON.parse(localStorage.getItem('sender2'))
}

displayMessage1()
displayMessage2()