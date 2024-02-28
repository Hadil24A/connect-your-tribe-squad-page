let navigatie = document.querySelector(".navigatie");
let aside = document.querySelector(".aside");

navigatie.addEventListener("click", () => {
    navigatie.classList.toggle("active");
    navigatie.classList.toggle("aside-active");
})

// // Selecteer de elementen om de dialog te openen en om weer te sluiten
// let dialog = document.querySelector("dialog");
// let openDialogButton = document.querySelector("sonny-angel");
// let sendMail = document.querySelector("button");
// let closeDialogButton = document.querySelector("close-button")

// // Klik op sonny angel om dialog te openen
// openDialogButton.addEventListener('click', () => {
//     dialog.classList.add(dialog)
// })

// // Klik op button angel om email te sturen
// sendMail.addEventListener('click', () => {
//     dialog.classList.add(dialog)
// })

// // Klik op het kruisje om dialog te sluiten
// closeDialogButton.addEventListener('click', () => {
//     dialog.classList.remove(dialog)
// })