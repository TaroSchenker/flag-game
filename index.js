
// let indexNumber = 1
const fetchCountry = async () => {
    const URL = ('https://restcountries.com/#api-endpoints-v3-all')
    const response = await fetch(URL)
    const countryData = await response.json()
    console.log(countryData)
    const title = document.getElementById('countryName')
    title.textContent = countryData.name
}

fetchCountry()

// const button = document.querySelector('#nextCountry')
// button.addEventListener('click', () => {
//     indexNumber++
//     fetchCountry(indexNumber)

// })
