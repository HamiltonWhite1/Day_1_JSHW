//Exercise #1

let dogString = "Hello Max, my name is Dog, and I have purple eyes!"
let dogNames = ["Max", "HAS", "Purple", "dog"]

var findDogs = (dogName, listOfNames) => {
    ourDogList = dogName.toLowerCase().split(" ")
    ourListOfNames = listOfNames.join().toLowerCase()
    for (var i = 0; i < ourDogList.length; i++){
        if (ourListOfNames.includes(ourDogList[i].replace(",", ""))){
            console.log(`${ourDogList[i].replace(",","")} is in our list`)
        }
        else {
            console.log("Not match!")
        }
    }
}
findDogs(dogString, dogNames)

//Exercise #2

let givenArr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

var replaceEvens = anArray => {
    let newArr = []
    for (var i = 0; i < anArray.length; i++){
        if (i % 2 === 0) {
            newArr.push("even index")
        }
        else {
            newArr.push(anArray[i])
        }
    }
    return newArr
}
console.log(replaceEvens(givenArr))
