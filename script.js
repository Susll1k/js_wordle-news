let keys = document.querySelectorAll("div.keys0");
const body = document.body;

const alphabet = new Set([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]);

let correctword = "apple";
let word = "";
let i = 0,
  j = 0;

body.addEventListener("keydown", (e) => {
  if (i === 5 && e.key === "Enter") {
    console.log(word);

    // Копия правильного слова для обработки
    let remainingLetters = correctword.split("");

    // Первый проход: проверяем точное совпадение (зеленый)
    for (let i = 0; i < 5; i++) {
      if (word[i] === correctword[i]) {
        keys[i].style.backgroundColor = "rgb(104, 204, 146)"; // Зеленый
        remainingLetters[i] = null; // Удаляем угаданную букву из доступных
      }
    }

    // Второй проход: проверяем наличие буквы в неправильном месте (оранжевый)
    for (let i = 0; i < 5; i++) {
      if (word[i] !== correctword[i]) {
        if (remainingLetters.includes(word[i])) {
          keys[i].style.backgroundColor = "rgb(204, 181, 104)"; // Оранжевый
          // Убираем использованную букву из оставшихся
          remainingLetters[remainingLetters.indexOf(word[i])] = null;
        } else {
          keys[i].style.backgroundColor = "rgb(184, 184, 184)"; // Серый
        }
      }
    }

    if (word === correctword) {
      alert("CORRECT!!!!!!");
      j = 6;
    }

    i = 0;
    j++;
    keys = document.querySelectorAll(`div.keys${j}`);
    word = "";
  }

  if (e.key === "Backspace") {
    if (i > 0) {
      i--;
      word = word.slice(0, -1);
      keys[i].innerText = "";
    }
  } else if (i < keys.length && alphabet.has(e.key)) {
    word += e.key;
    keys[i].innerText = e.key.toUpperCase();
    i++;
  }

  if (word !== correctword && j === 5) {
    alert("LOSE!!!");
  }
});