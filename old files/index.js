
let countryData;
let answerIndex = Math.floor(Math.random() * 3)
console.log(answerIndex)



function createAnswerElement(result){
    let scoreCounter = 0
    const resultElement  = document.getElementById('resultElement')
    console.log(resultElement)
    resultElement.textContent = result;

}

const fetchCountry1 = async () => {
    const index = getRandomNumber()
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countryData = await response.json();
    const countryFlag = countryData[index].flags.png
    if(answerIndex ===0){
        const title = document.getElementById('countryName')
        title.textContent = countryData[index].name.common
    }
    const img = document.getElementById('flag1')
    img.src = countryFlag
 }

const fetchCountry2 = async () => {
    const index = getRandomNumber()
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countryData = await response.json();
    const countryFlag = countryData[index].flags.png
    if(answerIndex ===1){
        const title = document.getElementById('countryName')
        title.textContent = countryData[index].name.common
    }
    const img = document.getElementById('flag2')
    img.src = countryFlag
    title.textContent = countryData[index].name.common
}


const fetchCountry3 = async () => {
    const index = getRandomNumber()
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countryData = await response.json();
    const countryFlag = countryData[index].flags.png
    if(answerIndex ===2){
        const title = document.getElementById('countryName')
        title.textContent = countryData[index].name.common
    }

    const img = document.getElementById('flag3')
    img.src = countryFlag
    title.textContent = countryData[index].name.common
}

fetchCountry1().catch(err =>  console.log(err))
fetchCountry2().catch(err =>  console.log(err))
fetchCountry3().catch(err =>  console.log(err))





function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100)
    // console.log(randomNumber)
    return randomNumber

}

getRandomNumber()




const button0 = document.querySelector('#coutry0')
button0.addEventListener('click', () =>{
    let answer = 0;
    if(answer === answerIndex){
        let result = 'correct'
        createAnswerElement(result)
    } else{
        console.log('wrong')
    }

})

const button1 = document.querySelector('#coutry1')
button1.addEventListener('click', () =>{
    let answer = 1;
    if(answer === answerIndex){
        let result = 'correct'
        createAnswerElement(result)
    } else{
        console.log('wrong')
    }
})


const button2 = document.querySelector('#coutry2')
button2.addEventListener('click', () =>{
    let answer = 2;
    if(answer === answerIndex){
        let result = 'correct'
        createAnswerElement(result)
    } else{
        console.log('wrong')
    }
})








// const button1= document.querySelector('#coutry1')
// const button2 = document.querySelector('#coutry2')


// button0.addEventListener('click', () => {
// const button0 = document.querySelector('#coutry0')
// const button1= document.querySelector('#coutry1')
// const button2 = document.querySelector('#coutry2')


// })
