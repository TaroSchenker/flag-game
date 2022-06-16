const gameState = {
  gameState: 'wait',
  correctAnswer: '',
  userGuess: '',
  totalScore: 0,
  turns: 0,
  result: '',
  highScore:0
}

let correctAnswer = null

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100)
    return randomNumber
}
const makeFetchRequest= async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countryData = await response.json();
    return countryData;
}
 const getGameStates = async () => {
        //get random Indexes to select a country from the API
        const country1Index = getRandomNumber()
        const country2Index = getRandomNumber()
        const country3Index = getRandomNumber()
        gameState.correctAnswer = Math.floor((Math.random() * 3))
        //save all api data in country data
        const countryData = await makeFetchRequest()
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
        return countryArray
 }

 const createCountryAssets =  async () => {
        const countryArray = await getGameStates()
       
        console.log('createassets ..answer is', gameState.correctAnswer)
        console.log(gameState)
        // country flag images
        const flagImage1 = countryArray[0][0]
        const flagImage2 = countryArray[1][0]
        const flagImage3 = countryArray[2][0]

        const countryName1 = countryArray[0][1]
        const countryName2 = countryArray[1][1]
        const countryName3 = countryArray[2][1]

        //create html objects
        //country name to display (we look for this flag)
        const countryNameHTML = document.querySelector('#resultElement')
        //update element with country name
        countryNameHTML.textContent = countryArray[gameState.correctAnswer][1]
        //create flag html elements
        const flagHTML1 = document.querySelector('#flag1')
        const flagHTML2 = document.querySelector('#flag2')
        const flagHTML3 = document.querySelector('#flag3')

        flagHTML1.src = flagImage1
        flagHTML2.src = flagImage2
        flagHTML3.src = flagImage3

        const score = document.querySelector('#score')
        score.textContent = gameState.totalScore
        console.log(score)   
 }

 const updateGuessState = (result) => {
  const gameStateFooter = document.querySelector('#gameStateFooter')
  gameStateFooter.textContent = gameState.result
  setTimeout(() => {
    gameStateFooter.textContent = ''
  }, 1000)
 }

//Button Clicks
  const button1 = document.querySelector('#button1')
  button1.addEventListener('click', (e) => {
    handleClick(e)
  })

  const button2 = document.querySelector('#button2')
  button2.addEventListener('click', (e) => {
    handleClick(e)

  })
  const button3 = document.querySelector('#button3')
  button3.addEventListener('click', (e) => {
    handleClick(e)
 
  })


const startGame = document.querySelector('#startGame')
    startGame.addEventListener('click', (e) => {
    initialiseGameState()
    createCountryAssets()
  })

  const initialiseGameState = () => { 
    gameState.gameState = 'active'
    gameState.totalScore = 0 
    gameState.turns = 0;
    console.log('Empty Game State initialised', gameState)

  }
  //Handle button clicks
  const handleClick = async (e) => {
    gameState.gameState = 'active'
    gameState.turns++
   let userGuess = parseInt(e.target.alt) 
   handleGuess(userGuess)
  }
  
  //handle guesses
  const handleGuess = async (userGuess) => {
    console.log('handleGuess', 'userguessed', userGuess, correctAnswer)
    if(userGuess === gameState.correctAnswer){
      gameState.result = 'Correct!'
      updateGuessState()
      gameState.totalScore++
      gameState.gameState = 'waiting'
      createCountryAssets()
      return
    } else if (userGuess != gameState.correctAnswer){
      gameState.result = 'Wrong, Score Reset!'
      if(gameState.totalScore > gameState.highScore){
        gameState.highScore = gameState.totalScore
        updateHighScore()
      }
      updateGuessState()
      createCountryAssets()
    }
  }


  const updateHighScore = () => {
    const highScore = document.querySelector('#highscore')
    highScore.textContent = gameState.highScore
    gameState.totalScore = 0

  }






