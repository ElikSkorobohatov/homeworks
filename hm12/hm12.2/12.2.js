let checkButton = document.querySelector(".block");

checkButton.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn")) {
        let btnNumber = event.target.textContent
        console.log('You push', btnNumber);
    }
})