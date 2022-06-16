//Promises
const myPromise = new Promise((resolve, reject) =>{
    const random = Math.floor(Math.random() * 2)
    console.log(random)
    if(random == 0) resolve()
    else reject()
})

myPromise  
    .then(()=> console.log("Success"))
    .catch(()=> console.log("Failed"))  
