const words = [
     {
        word: "Hola",
    meaning: "سلام",
    example: "Hola, ¿cómo estás?"
     },
     {
        word: "Casa",
    meaning: "خانه",
    example: "Mi casa es grande."
     },
     {
        word: "Casa",
    meaning: "خانه",
    example: "Mi casa es grande."
     },
     {
     word: "Libro",
    meaning: "کتاب",
    example: "Estoy leyendo un libro."
     }

]
const wordE= document.getElementById("word")
const meaningE = document.getElementById("meaning")
const exampleE = document.getElementById("example")
const btn = document.getElementById("btn")
btn.addEventListener("click" ,showWord )
function showWord(){
const randomIndex = 
Math.floor(Math.random() * words.length)
    const selectedWord = words[randomIndex]
    wordE.textContent =
    selectedWord.word

    meaningE.textContent =
    selectedWord.meaning

    exampleE.textContent =
    selectedWord.example
    }
    showWord()
    window.onload=showWord;
