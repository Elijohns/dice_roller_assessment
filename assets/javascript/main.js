const dieRoll = []
const number = document.querySelector("#number-of-dice")
const rollButton = document.querySelector("#roll-button")
const total = document.querySelector("#sum-of-rolls")
const allRollsButton = document.querySelector("#all-rolls-button")
const list = document.querySelector("#list-of-all-rolls")



rollButton.addEventListener("click", function() {
  let valueNumber = number.value
  let roll = 0
  while (roll < valueNumber) {
      let randNumber = Math.floor(Math.random() * 6) + 1
      let total = randNumber
    dieRoll.push(total)
    total.innerHTML = sum 
    
   }
   console.log(dieRoll)
     
})

    

allRollsButton.addEventListener("click", function() {
  let number = 0
  while (number < dieRoll.length) {
    list.innerHTML = "<li>" + dieRoll[number] + "</li>" 
    
  }
  console.log(list)})