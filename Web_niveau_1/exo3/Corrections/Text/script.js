const simpleText = document.querySelector(".simpleText")


simpleText.addEventListener("click", ()=>{
    simpleText.textContent = "CA BULLE GRAVE"
})

function showUserText() {
    const input = document.getElementById("userInput").value
    alert(input)
}

function enterUserText() {
    const input = document.getElementById("userInputToEnter").value
    document.querySelector(".textToModify").textContent = input
}