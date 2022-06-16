
let countryData;



const fetchCountry1 = async () => {
    const index = getRandomNumber()
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countryData = await response.json();
    console.log(countryData)
    const countryFlag = countryData[index].flags.png
    console.log(countryFlag)
    const title = document.getElementById('countryName')
    const img = document.getElementById('flag1')
    img.src = countryFlag
    title.textContent = countryData[index].name.common
}

fetchCountry1().catch(err =>  console.log(err))


const fetchCountry2 = async () => {
    const index = getRandomNumber()
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countryData = await response.json();
    console.log(countryData)
    const countryFlag = countryData[index].flags.png
    console.log(countryFlag)
    const title = document.getElementById('countryName2')
    const img = document.getElementById('flag2')
    img.src = countryFlag
    title.textContent = countryData[index].name.common
}

fetchCountry2().catch(err =>  console.log(err))

const fetchCountry3 = async () => {
    const index = getRandomNumber()
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countryData = await response.json();
    console.log(countryData)
    const countryFlag = countryData[index].flags.png
    console.log(countryFlag)
    const title = document.getElementById('countryName3')
    const img = document.getElementById('flag3')
    img.src = countryFlag
    title.textContent = countryData[index].name.common
}

fetchCountry3().catch(err =>  console.log(err))




function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100)
    // console.log(randomNumber)
    return randomNumber

}

getRandomNumber()

// const button = document.querySelector('#nextCountry')
// button.addEventListener('click', () => {
//     indexNumber++
//     fetchCountry(indexNumber)

// })
