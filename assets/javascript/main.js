const dieRoll = []
const number = document.querySelector("#number-of-dice")
const rollButton = document.querySelector("#roll-button")
const total = document.querySelector("#sum-of-rolls")
const allRollsButton = document.querySelector("#all-rolls-button")
const list = document.querySelector("#list-of-all-rolls")



rollButton.addEventListener("click", function() {
  let valueEnteredNumber = number.value
  let roll = 0
  while (roll <valueEnteredNumber) {
      let randomNumber = Math.floor(Math.random() * 6) + 1
      let result = randomNumber
      roll += 1
    dieRoll.push(result)
    total.innerHTML = sum 
    
   }
   console.log(dieRoll)
     
})

    

allRollsButton.addEventListener("click", function() {
  let number = 0
  while (number < dieRoll.length) {
    list.innerHTML = "<li>" + dieRoll(number) + "</li>" 
    
  }
  console.log(list)})