
let gameNeedsToLoad = false

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100)
    return randomNumber
}
const makeFetchRequest= async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countryData = await response.json();
    return countryData;

}

 const gameGameStates = async () => {
        //get random Indexes to select a country from the API
        const country1Index = getRandomNumber()
        const country2Index = getRandomNumber()
        const country3Index = getRandomNumber()

        //save all api data in country data
        const countryData = await makeFetchRequest()
        console.log(countryData)

        //create country flags from data using index
        const countryFlag1 = countryData[country1Index].flags.png
        const countryFlag2 = countryData[country2Index].flags.png
        const countryFlag3 = countryData[country3Index].flags.png

        //create country names from data using index
        const countryName1 = countryData[country1Index].name.common 
        const countryName2 = countryData[country2Index].name.common  
        const countryName3 = countryData[country3Index].name.common   
    
      //create elements on page for each flags
        const countryArray = [[countryFlag1,countryName1], [countryFlag2,countryName2],[countryFlag3,countryName3]]
        console.log(countryArray)
 }

 const createCountryAssets = () => {
    const title = document.getElementById('countryName')  
 }

 gameGameStates()
 gameGameStates()
 gameGameStates()


