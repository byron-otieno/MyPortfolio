setInterval(setClock, 1000)

const hourHand=document.querySelector('[data-hour-hand]')
const minuteHand=document.querySelector('[data-minute-hand]')
const secondHand=document.querySelector('[data-second-hand]')

function setClock(){
const currentDate=new Date()
const secondRation=currentDate.getSeconds()/60
const minuteRation=(secondRation+currentDate.getMinutes())/60
const hourRation=(minuteRation+currentDate.getHours())/12


setRotation(hourHand,hourRation)
setRotation(minuteHand,minuteRation)
setRotation(secondHand,secondRation)


}

function setRotation(element, rotationRation){
    element.style.setProperty('--rotation', rotationRation*360)
}

setClock()