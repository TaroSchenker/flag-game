let countryData;
let answerIndex = Math.floor(Math.random() * 3);
console.log(answerIndex);

function createAnswerElement(result) {
  const resultElement = document.querySelector("#resultElement");
  resultElement.textContent = result;
}

const getNewFlags = () => {

    fetchCountry1();
    fetchCountry2();
    fetchCountry3();

};

const startGame = () => {

const fetchCountry1 = async () => {
  const index = getRandomNumber();
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countryData = await response.json();
  console.log(countryData);
  const countryFlag = countryData[index].flags.png;
  console.log(countryFlag);
  if (answerIndex === 0) {
    const title = document.getElementById("countryName");
    title.textContent = countryData[index].name.common;
  }
  const img = document.getElementById("flag1");
  img.src = countryFlag;
};

const fetchCountry2 = async () => {
  const index = getRandomNumber();
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countryData = await response.json();
  console.log(countryData);
  const countryFlag = countryData[index].flags.png;
  console.log(countryFlag);
  if (answerIndex === 1) {
    const title = document.getElementById("countryName");
    title.textContent = countryData[index].name.common;
  }
  const img = document.getElementById("flag2");
  img.src = countryFlag;
  title.textContent = countryData[index].name.common;
};

const fetchCountry3 = async () => {
  const index = getRandomNumber();
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countryData = await response.json();
  console.log(countryData);
  const countryFlag = countryData[index].flags.png;
  console.log(countryFlag);
  if (answerIndex === 2) {
    const title = document.getElementById("countryName");
    title.textContent = countryData[index].name.common;
  }
  const img = document.getElementById("flag3");
  img.src = countryFlag;
  title.textContent = countryData[index].name.common;
};

fetchCountry1().catch((err) => console.log(err));
fetchCountry2().catch((err) => console.log(err));
fetchCountry3().catch((err) => console.log(err));

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

const button0 = document.querySelector("#coutry0");
button0.addEventListener("click", () => {
  console.log("button1 clicked");
  let answer = 0;
  let result = "";
  if (answer === answerIndex) {
    console.log("correct");
    result = "correct";
    createAnswerElement(result);
    getNewFlags();
    return;
  } else {
    result = "wrong";
    console.log("wrong");
    createAnswerElement(result);
    getNewFlags();
    return;
  }
});

const button1 = document.querySelector("#coutry1");
button1.addEventListener("click", () => {
  console.log("button2 clicked");
  let answer = 1;
  let result = "";
  if (answer === answerIndex) {
    console.log("correct");
    result = "correct";
    createAnswerElement(result);
    getNewFlags();
    return;
  } else {
    result = "wrong";
    console.log("wrong");
    createAnswerElement(result);
    getNewFlags();
    return;
  }
});

<<<<<<< HEAD
const button2 = document.querySelector("#coutry2");
button2.addEventListener("click", () => {
  console.log("button3 clicked");
  let answer = 2;
  let result = "";
  if (answer === answerIndex) {
    result = "correct";
    console.log("correct");
    createAnswerElement(result);
    getNewFlags();
    return;
  } else {
    result = "wrong";
    console.log("wrong");
    createAnswerElement(result);
    getNewFlags();
    return;
  }
});
=======
const button0 = document.querySelector('#coutry0')
button0.addEventListener('click', () =>{
    console.log('button1 clicked')
    let answer = 0;
    let result = ''
    if(answer === answerIndex){
        console.log('correct')
        result = 'correct'
        createAnswerElement(result)
        getNewFlags()
        console.log(button0)
        return
    } else{
        result = 'wrong'
        console.log('wrong')
        createAnswerElement(result)
        getNewFlags()
        return
    }

})

const button1 = document.querySelector('#coutry1')
button1.addEventListener('click', () =>{
    console.log('button2 clicked')
    let answer = 1;
    let result = ''
    if(answer === answerIndex){
        console.log('correct')
        result = 'correct'
        createAnswerElement(result)
        getNewFlags()
       return
    } else{
        result = 'wrong'
        console.log('wrong')
        createAnswerElement(result)
        getNewFlags()
        return
    }
})


const button2 = document.querySelector('#coutry2')
button2.addEventListener('click', () =>{
    console.log('button3 clicked')
    let answer = 2;
    let result = ''
    if(answer === answerIndex){
         result = 'correct'
         console.log('correct')
        createAnswerElement(result)
        getNewFlags()
        return
    } else{
         result = 'wrong'
         console.log('wrong')
        createAnswerElement(result)
        getNewFlags()
        return
    }
})







>>>>>>> 301ea88c732490c3497834a6923139ba391c0125

// const button1= document.querySelector('#coutry1')
// const button2 = document.querySelector('#coutry2')

// button0.addEventListener('click', () => {
// const button0 = document.querySelector('#coutry0')
// const button1= document.querySelector('#coutry1')
// const button2 = document.querySelector('#coutry2')

// })
