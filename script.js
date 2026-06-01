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
       word: "Perro",
    meaning: "سگ",
    example: "Tengo un perro."
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
let lastIndex = -1
btn.addEventListener("click" ,showWord )
function showWord() {

  let randomIndex

  do {
    randomIndex = Math.floor(Math.random() * words.length)
  } while (randomIndex === lastIndex)

  lastIndex = randomIndex

  const selectedWord = words[randomIndex]

  wordE.textContent = selectedWord.word
  meaningE.textContent = selectedWord.meaning
  exampleE.textContent = selectedWord.example
}
    showWord()
    window.onload=showWord;
